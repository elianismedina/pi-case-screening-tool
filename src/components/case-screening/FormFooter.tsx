"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Check, Copy, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CardFooter } from "@/components/ui/card"
import { steps } from "./constants"

interface FormFooterProps {
  currentStep: number
  prevStep: () => void
  nextStep: () => void
  canProceedToNext: boolean
  copyToClipboard: () => void
  generatePDF: () => void
  copied: boolean
}

export function FormFooter({
  currentStep,
  prevStep,
  nextStep,
  canProceedToNext,
  copyToClipboard,
  generatePDF,
  copied,
}: FormFooterProps) {
  return (
    <CardFooter className="flex flex-col gap-4">
      <Separator />

      {/* Navigation Buttons */}
      <div className="flex w-full gap-3">
        {currentStep > 1 && (
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            className="flex-1 gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
        )}

        {currentStep < steps.length && (
          <Button
            type="button"
            onClick={nextStep}
            disabled={!canProceedToNext}
            className="flex-1 gap-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex w-full gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={copyToClipboard}
          className="flex-1 gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Summary for AI
            </>
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={generatePDF}
          className="flex-1 gap-2"
        >
          <Download className="h-4 w-4" />
          Generate PDF
        </Button>
      </div>
    </CardFooter>
  )
}
