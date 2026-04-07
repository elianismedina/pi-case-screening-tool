"use client"

import * as React from "react"
import { FormProvider } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"
import { Form } from "@/components/ui/form"

import { FormHeader } from "./case-screening/FormHeader"
import { FormFooter } from "./case-screening/FormFooter"
import { Step1Jurisdiction } from "./case-screening/Step1Jurisdiction"
import { Step2IncidentDetails } from "./case-screening/Step2IncidentDetails"
import { Step3AdditionalInformation } from "./case-screening/Step3AdditionalInformation"
import { useCaseForm } from "./case-screening/useCaseForm"

export function CaseScreeningForm() {
  const {
    form,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    canProceedToNext,
    copyToClipboard,
    generatePDF,
    resetForm,
    copied,
  } = useCaseForm()

  return (
    <Card className="w-full max-w-3xl border-none bg-white/80 shadow-2xl backdrop-blur-xl dark:bg-zinc-900/80">
      <FormHeader 
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep} 
        resetForm={resetForm}
      />

      <FormProvider {...form}>
        <Form {...form}>
          <form onSubmit={(e) => e.preventDefault()}>
            <CardContent className="space-y-6">
              {currentStep === 1 && <Step1Jurisdiction />}
              {currentStep === 2 && <Step2IncidentDetails />}
              {currentStep === 3 && <Step3AdditionalInformation />}
            </CardContent>

            <FormFooter
              currentStep={currentStep}
              nextStep={nextStep}
              prevStep={prevStep}
              canProceedToNext={canProceedToNext}
              copyToClipboard={copyToClipboard}
              generatePDF={generatePDF}
              copied={copied}
            />
          </form>
        </Form>
      </FormProvider>
    </Card>
  )
}