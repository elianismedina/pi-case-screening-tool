import * as z from "zod"
import { MapPin, FileText, Shield } from "lucide-react"

export const states = [
  "Arizona",
  "Florida",
  "Colorado",
  "Wisconsin",
  "North Carolina",
  "Georgia",
]

export const formSchema = z.object({
  // Step 1: Jurisdiction & SOL
  state: z.string({
    message: "Please select a state.",
  }),
  date: z.date({
    message: "A date of incident is required.",
  }),

  // Step 2: Incident Details
  caseType: z.string({
    required_error: "Please select a case type.",
  }),
  caseCategory: z.string({
    required_error: "Please select a category.",
  }),
  caseSubType: z.string().optional(),
  details: z.string().min(50, {
    message: "Please provide at least 50 characters of detail.",
  }),

  // Step 3: Additional Questions - Core Incident and Demographic Questions
  coreIncident: z.object({
    exactDate: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    location: z.string().optional(),
    city: z.string().optional(),
    atFaultPartyKnown: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    atFaultPartyInfo: z.string().optional(),
    policeReportFiled: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    reportedToPropertyManager: z.enum(["yes", "no", "not_applicable", "unsure"], { required_error: "Please select an option" }),
  }),

  // Medical Evaluation and Injury Details
  medicalEvaluation: z.object({
    bodyPartsInjured: z.string().optional(),
    currentSymptoms: z.string().optional(),
    firstDoctorVisit: z.string().optional(),
    transportedByAmbulance: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    treatmentReceived: z.string().optional(),
    stillReceivingTreatment: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    surgeryCompleted: z.enum(["yes", "no", "recommended", "unsure"], { required_error: "Please select an option" }),
    priorMedicalConditions: z.string().optional(),
    activelyTreatingCondition: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    currentMedications: z.string().optional(),
  }),

  // Employment and Economic Damages
  employment: z.object({
    missedWork: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    currentlyAbleToWork: z.enum(["yes", "no", "limited", "unsure"], { required_error: "Please select an option" }),
    employerName: z.string().optional(),
    employerContact: z.string().optional(),
    hourlyRate: z.string().optional(),
    annualSalary: z.string().optional(),
    longTermWorkImpact: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
  }),

  // Insurance Coverage and Financial Pillars
  insuranceCoverage: z.object({
    otherPartyHasInsurance: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    atFaultInsuranceCompany: z.string().optional(),
    ownAutoInsuranceCompany: z.string().optional(),
    ownPolicyNumber: z.string().optional(),
    hasUMCoverage: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    hasUIMCoverage: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    hasMedPayOrPIP: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    pipDeductible: z.string().optional(),
    otherHouseholdVehicles: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    hasHealthInsurance: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    healthInsuranceType: z.string().optional(),
    workingAtTimeOfAccident: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
  }),

  // Liability Assessment and History
  liability: z.object({
    vehicleYear: z.string().optional(),
    vehicleMake: z.string().optional(),
    vehicleModel: z.string().optional(),
    vehicleMileage: z.string().optional(),
    vehicleDrivable: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    vehicleLocation: z.string().optional(),
    wearingSeatbelt: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    distractedAtTime: z.string().optional(),
    faultAdmissions: z.string().optional(),
    priorAccidents: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    priorAttorneyConsulted: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    bestContactNumber: z.string().optional(),
    bestContactEmail: z.string().optional(),
    bestContactTime: z.string().optional(),
  }),

  // AI Decision (optional, for pasting back)
  aiDecision: z.object({
    decision: z.enum(["Accept", "Decline", "Escalate"], {
      required_error: "Please select a decision",
    }).optional(),
    justification: z.string().optional(),
  }).optional(),
})

export type FormValues = z.infer<typeof formSchema>

export const steps = [
  {
    id: 1,
    title: "Jurisdiction & SOL",
    description: "State and date information for Statute of Limitations",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Incident Details",
    description: "Provide a detailed narrative of what happened",
    icon: FileText,
  },
  {
    id: 3,
    title: "Additional Questions",
    description: "Medical, insurance, and liability information",
    icon: Shield,
  },
]
