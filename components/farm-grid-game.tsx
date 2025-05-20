"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Sun, CloudRain, Trophy, TrendingDown, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { CarrotIcon } from "@/components/animated-icons/carrot-icon"
import { TomatoIcon } from "@/components/animated-icons/tomato-icon"
import { PotatoIcon } from "@/components/animated-icons/potato-icon"
import { CucumberIcon } from "@/components/animated-icons/cucumber-icon"
import { CabbageIcon } from "@/components/animated-icons/cabbage-icon"
import { AppleIcon } from "@/components/animated-icons/apple-icon"
import { PearIcon } from "@/components/animated-icons/pear-icon"
import { CornIcon } from "@/components/animated-icons/corn-icon"
import { StrawberryIcon } from "@/components/animated-icons/strawberry-icon"

// Визначаємо овочі та фрукти з балами
const vegetables = [
  { id: "carrot", name: "Gulrot", component: CarrotIcon, points: 10 },
  { id: "tomato", name: "Tomat", component: TomatoIcon, points: 15 },
  { id: "potato", name: "Potet", component: PotatoIcon, points: 5 },
  { id: "cucumber", name: "Agurk", component: CucumberIcon, points: 8 },
  { id: "cabbage", name: "Kål", component: CabbageIcon, points: 12 },
  { id: "apple", name: "Eple", component: AppleIcon, points: 20 },
  { id: "pear", name: "Pære", component: PearIcon, points: 18 },
  { id: "corn", name: "Mais", component: CornIcon, points: 25 },
  { id: "strawberry", name: "Jordbær", component: StrawberryIcon, points: 30 },
]

interface GridCell {
  id: string
  vegetable: (typeof vegetables)[number]
  isSpinning: boolean
}

export function FarmGridGame() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [harvestCount, setHarvestCount] = useState(0)
  const [score, setScore] = useState(0)
  const [seasonProgress, setSeasonProgress] = useState(0)
  const [grid, setGrid] = useState<GridCell[][]>([])
  const [gameStarted, setGameStarted] = useState(false)
  const [weather, setWeather] = useState<"sunny" | "rainy" | "cloudy">("sunny")
  const [matches, setMatches] = useState<{ row: number; col: number }[]>([])
  const [lastScoreChange, setLastScoreChange] = useState(0)
  const [hasMatch, setHasMatch] = useState(false)
  const [penalty, setPenalty] = useState(0)

  const spinInterval = useRef<NodeJS.Timeout | null>(null)
  const spinDuration = useRef(2000) // Total spin time in ms
  const spinStartTime = useRef(0)

  // Константи для розміру сітки
  const GRID_ROWS = 3
  const GRID_COLS = 3

  // Ініціалізація гри
  useEffect(() => {
    initializeGrid()

    return () => {
      if (spinInterval.current) {
        clearInterval(spinInterval.current)
      }
    }
  }, [])

  // Ініціалізація сітки 3x3
  const initializeGrid = () => {
    const newGrid: GridCell[][] = []
    for (let row = 0; row < GRID_ROWS; row++) {
      const newRow: GridCell[] = []
      for (let col = 0; col < GRID_COLS; col++) {
        newRow.push({
          id: `cell-${row}-${col}`,
          vegetable: getRandomVegetable(),
          isSpinning: false,
        })
      }
      newGrid.push(newRow)
    }
    setGrid(newGrid)
  }

  // Отримати випадковий овоч
  const getRandomVegetable = () => {
    return vegetables[Math.floor(Math.random() * vegetables.length)]
  }

  // Почати збір врожаю
  const startHarvest = () => {
    if (isSpinning) return

    setGameStarted(true)
    setIsSpinning(true)
    spinStartTime.current = Date.now()
    setMatches([])
    setLastScoreChange(0)
    setHasMatch(false)
    setPenalty(0)

    // Позначаємо всі клітинки як такі, що крутяться
    setGrid((prevGrid) =>
      prevGrid.map((row) =>
        row.map((cell) => ({
          ...cell,
          isSpinning: true,
        })),
      ),
    )

    // Запускаємо інтервал для оновлення сітки
    if (spinInterval.current) {
      clearInterval(spinInterval.current)
    }

    spinInterval.current = setInterval(() => {
      // Оновлюємо сітку з випадковими овочами
      setGrid((prevGrid) =>
        prevGrid.map((row) =>
          row.map((cell) => ({
            ...cell,
            vegetable: getRandomVegetable(),
            isSpinning: true,
          })),
        ),
      )

      // Перевіряємо, чи час обертання закінчився
      const elapsedTime = Date.now() - spinStartTime.current
      if (elapsedTime >= spinDuration.current) {
        endHarvest()
      }
    }, 100)
  }

  // Закінчити збір врожаю
  const endHarvest = () => {
    if (spinInterval.current) {
      clearInterval(spinInterval.current)
      spinInterval.current = null
    }

    // Генеруємо фінальну сітку
    const finalGrid: GridCell[][] = []
    for (let row = 0; row < GRID_ROWS; row++) {
      const newRow: GridCell[] = []
      for (let col = 0; col < GRID_COLS; col++) {
        newRow.push({
          id: `cell-${row}-${col}`,
          vegetable: getRandomVegetable(),
          isSpinning: false,
        })
      }
      finalGrid.push(newRow)
    }

    setGrid(finalGrid)
    setIsSpinning(false)

    // Знаходимо збіги (3 або більше однакових овочів у ряд)
    const newMatches = findMatches(finalGrid)
    setMatches(newMatches)

    // Перевіряємо, чи є збіги
    const foundMatch = newMatches.length > 0
    setHasMatch(foundMatch)

    if (foundMatch) {
      // Рахуємо бали за збіги
      const matchScore = calculateMatchScore(finalGrid, newMatches)
      setLastScoreChange(matchScore)
      setScore((prev) => prev + matchScore)
      setPenalty(0)
    } else {
      // Віднімаємо бали, якщо немає збігів
      const penaltyPoints = calculatePenalty()
      setPenalty(penaltyPoints)
      setLastScoreChange(-penaltyPoints)
      setScore((prev) => Math.max(0, prev - penaltyPoints)) // Не дозволяємо рахунку стати від'ємним
    }

    // Збільшуємо лічильник зібраного врожаю
    setHarvestCount((prev) => prev + 1)

    // Оновлюємо прогрес сезону
    setSeasonProgress((prev) => {
      const newProgress = prev + Math.floor(Math.random() * 5) + 1
      return Math.min(newProgress, 100)
    })

    // Випадково змінюємо погоду
    const weathers: Array<"sunny" | "rainy" | "cloudy"> = ["sunny", "rainy", "cloudy"]
    setWeather(weathers[Math.floor(Math.random() * weathers.length)])
  }

  // Рахуємо штраф за відсутність збігів
  const calculatePenalty = () => {
    // Базовий штраф
    const basePenalty = 5

    // Збільшуємо штраф з кожним ходом без збігів
    const progressPenalty = Math.floor(harvestCount / 3)

    return basePenalty + progressPenalty
  }

  // Рахуємо бали за збіги
  const calculateMatchScore = (grid: GridCell[][], matches: { row: number; col: number }[]) => {
    if (matches.length === 0) return 0

    // Створюємо мапу для підрахунку унікальних збігів
    const uniqueMatches = new Map<string, { count: number; points: number }>()

    // Підраховуємо кількість кожного типу овоча/фрукта у збігах
    matches.forEach((match) => {
      const vegetableId = grid[match.row][match.col].vegetable.id
      const vegetablePoints = grid[match.row][match.col].vegetable.points

      if (uniqueMatches.has(vegetableId)) {
        const current = uniqueMatches.get(vegetableId)!
        uniqueMatches.set(vegetableId, {
          count: current.count + 1,
          points: vegetablePoints,
        })
      } else {
        uniqueMatches.set(vegetableId, {
          count: 1,
          points: vegetablePoints,
        })
      }
    })

    // Рахуємо загальну кількість балів
    let totalScore = 0
    uniqueMatches.forEach((value, key) => {
      // Базові бали за кожен тип овоча/фрукта
      const basePoints = value.points
      // Кількість збігів цього типу (зазвичай 3 для горизонтальних/вертикальних/діагональних ліній)
      const matchCount = value.count
      // Множник для більшої кількості збігів
      const multiplier = Math.floor(matchCount / 3)
      // Додаткові бали за більше збігів
      const bonusPoints = multiplier > 1 ? multiplier * 50 : 0

      totalScore += basePoints * matchCount + bonusPoints
    })

    return totalScore
  }

  // Знаходження збігів у сітці
  const findMatches = (grid: GridCell[][]) => {
    const matches: { row: number; col: number }[] = []

    // Перевіряємо горизонтальні збіги (3 в ряд)
    for (let row = 0; row < GRID_ROWS; row++) {
      if (
        grid[row][0].vegetable.id === grid[row][1].vegetable.id &&
        grid[row][0].vegetable.id === grid[row][2].vegetable.id
      ) {
        matches.push({ row, col: 0 })
        matches.push({ row, col: 1 })
        matches.push({ row, col: 2 })
      }
    }

    // Перевіряємо вертикальні збіги (3 в ряд)
    for (let col = 0; col < GRID_COLS; col++) {
      if (
        grid[0][col].vegetable.id === grid[1][col].vegetable.id &&
        grid[0][col].vegetable.id === grid[2][col].vegetable.id
      ) {
        matches.push({ row: 0, col })
        matches.push({ row: 1, col })
        matches.push({ row: 2, col })
      }
    }

    // Перевіряємо діагональні збіги (3 в ряд)
    // Діагональ зліва направо (зверху вниз)
    if (grid[0][0].vegetable.id === grid[1][1].vegetable.id && grid[0][0].vegetable.id === grid[2][2].vegetable.id) {
      matches.push({ row: 0, col: 0 })
      matches.push({ row: 1, col: 1 })
      matches.push({ row: 2, col: 2 })
    }

    // Діагональ справа наліво (зверху вниз)
    if (grid[0][2].vegetable.id === grid[1][1].vegetable.id && grid[0][2].vegetable.id === grid[2][0].vegetable.id) {
      matches.push({ row: 0, col: 2 })
      matches.push({ row: 1, col: 1 })
      matches.push({ row: 2, col: 0 })
    }

    return matches
  }

  // Перевірка, чи клітинка є частиною збігу
  const isMatching = (row: number, col: number) => {
    return matches.some((match) => match.row === row && match.col === col)
  }

  // Скинути гру
  const resetGame = () => {
    setHarvestCount(0)
    setScore(0)
    setSeasonProgress(0)
    setGameStarted(false)
    setMatches([])
    setLastScoreChange(0)
    setHasMatch(false)
    setPenalty(0)
    initializeGrid()
    setWeather("sunny")
  }

  // Відображення овоча
  const renderVegetable = (cell: GridCell, row: number, col: number) => {
    const isMatch = isMatching(row, col)
    const IconComponent = cell.vegetable.component

    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center transition-all",
          isMatch && "matching-vegetable",
        )}
      >
        <IconComponent size={60} isAnimated={!cell.isSpinning && isMatch} />
        <div className="mt-1 text-xs font-medium">{cell.vegetable.points}p</div>
      </div>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="bg-primary/5 pb-4">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <CardTitle>FrostPlay Network</CardTitle>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Badge variant="outline" className="flex items-center gap-1">
              <Trophy className="h-3 w-3" /> Poeng: {score}
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Leaf className="h-3 w-3" /> Sesong: {seasonProgress}%
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              {weather === "sunny" && <Sun className="h-3 w-3" />}
              {weather === "rainy" && <CloudRain className="h-3 w-3" />}
              {weather === "cloudy" && <Cloud className="h-3 w-3" />}
              Vær: {weather === "sunny" ? "Solrikt" : weather === "rainy" ? "Regn" : "Overskyet"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row">
          <div>
            <p className="text-sm font-medium">Høstet avlinger: {harvestCount}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Sesongfremgang: {seasonProgress}%</p>
            <div className="mt-1 h-2 w-32 rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${seasonProgress}%` }}></div>
            </div>
          </div>
        </div>

        {/* Сітка 3x3 */}
        <div className="mb-6 rounded-lg bg-gradient-to-b from-green-100 to-green-200 p-4">
          <div className="grid grid-cols-3 grid-rows-3 gap-3">
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <div
                  key={cell.id}
                  className={cn(
                    "aspect-square rounded-lg border-2 border-green-300 bg-white p-2 transition-all",
                    cell.isSpinning ? "animate-pulse" : "",
                    isMatching(rowIndex, colIndex) ? "border-primary bg-primary/10" : "",
                  )}
                >
                  {renderVegetable(cell, rowIndex, colIndex)}
                </div>
              )),
            )}
          </div>

          {/* Кнопка збору врожаю */}
          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              disabled={isSpinning}
              onClick={startHarvest}
              className="relative h-14 w-48 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-base font-bold text-white shadow-lg transition-all hover:from-green-700 hover:to-green-800 disabled:opacity-50 sm:h-16 sm:text-lg"
            >
              {isSpinning ? (
                <span className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 animate-pulse" />
                  Høster...
                </span>
              ) : (
                "HØSTE AVLING"
              )}

              <span className="absolute -bottom-1 left-0 right-0 h-1 animate-pulse rounded-full bg-white/30"></span>
            </Button>
          </div>
        </div>

        {/* Інформація про овочі та бали */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-medium">Siste høst</h3>
            {gameStarted ? (
              <div className={cn("rounded-md p-4", hasMatch ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800")}>
                {hasMatch ? (
                  <>
                    <p className="font-medium">Flott avling!</p>
                    <p>
                      Du høstet {matches.length / 3} grupper med like grønnsaker og frukter.
                      {matches.length > 3 && " Fantastisk! Du fikk en bonus!"}
                    </p>
                    <p className="mt-2 font-semibold">
                      <TrendingUp className="mr-1 inline-block h-4 w-4" />
                      Du fikk {lastScoreChange} poeng!
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-medium">Ingen match!</p>
                    <p>Du fikk ingen grupper med like grønnsaker eller frukter.</p>
                    <p className="mt-2 font-semibold">
                      <TrendingDown className="mr-1 inline-block h-4 w-4" />
                      Du mistet {penalty} poeng!
                    </p>
                  </>
                )}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Trykk på "HØSTE AVLING"-knappen for å starte.</p>
            )}
          </div>

          <div>
            <h3 className="mb-2 text-lg font-medium">Grønnsaker og frukter</h3>
            <div className="grid grid-cols-3 gap-2">
              {vegetables.slice(0, 6).map((vegetable) => (
                <div key={vegetable.id} className="flex items-center gap-1 rounded-md bg-muted p-2">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <vegetable.component size={30} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs">{vegetable.name}</span>
                    <span className="text-xs text-muted-foreground">{vegetable.points} p</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-between gap-4 bg-muted/30 p-4 sm:flex-row">
        <div className="text-sm">
          <p>Trykk på "HØSTE AVLING"-knappen for å høste grønnsaker og frukter!</p>
          <p className="text-muted-foreground">
            Grupper med 3 like grønnsaker eller frukter gir poeng basert på type. Ingen match = tap av poeng!
          </p>
        </div>
        {gameStarted && (
          <Button variant="outline" onClick={resetGame} className="w-full sm:w-auto">
            Ny sesong
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

// Компонент іконки хмари
function Cloud({ className, ...props }: React.ComponentProps<typeof Leaf>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}
