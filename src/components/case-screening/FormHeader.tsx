"use client"

import { RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { steps } from "./constants"

interface FormHeaderProps {
  currentStep: number
  setCurrentStep: (step: number) => void
  resetForm: () => void
}

export function FormHeader({ currentStep, setCurrentStep, resetForm }: FormHeaderProps) {
  return (
    <CardHeader className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Case Screening Form
          </CardTitle>
          <CardDescription className="text-zinc-500 dark:text-zinc-400">
            Complete all steps to submit your case for screening
          </CardDescription>
        </div>
        <div className="flex flex-col items-end gap-2">
          {currentStep === steps.length && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={resetForm}
              className="h-8 gap-2 text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wider">New Evaluation</span>
            </Button>
          )}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Step {currentStep} of {steps.length}
            </span>
            <div className="flex gap-1">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    step.id === currentStep
                      ? "bg-blue-600 dark:bg-blue-400"
                      : step.id < currentStep
                      ? "bg-green-500 dark:bg-green-400"
                      : "bg-zinc-300 dark:bg-zinc-700"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Step Progress Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setCurrentStep(step.id)}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all whitespace-nowrap",
                step.id === currentStep
                  ? "border-blue-500 bg-blue-50 text-blue-700 dark:border-blue-400 dark:bg-blue-950/50 dark:text-blue-300"
                  : step.id < currentStep
                  ? "border-green-500 bg-green-50 text-green-700 dark:border-green-400 dark:bg-green-950/50 dark:text-green-300"
                  : "border-zinc-200 bg-zinc-50 text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-400"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{step.title}</span>
            </button>
          )
        })}
      </div>
    </CardHeader>
  )
}
