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
  details: z.string().min(50, {
    message: "Please provide at least 50 characters of detail.",
  }),

  // Step 3: Dynamic Questions
  medicalTreatment: z.object({
    sought: z.enum(["yes", "no"], { required_error: "Please select an option" }),
    provider: z.string().optional(),
    diagnosis: z.string().optional(),
    ongoing: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
  }),

  insuranceCoverage: z.object({
    hasInsurance: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    provider: z.string().optional(),
    policyNumber: z.string().optional(),
    coverageType: z.string().optional(),
  }),

  liability: z.object({
    clearLiability: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    atFaultParty: z.string().optional(),
    witnesses: z.enum(["yes", "no"], { required_error: "Please select an option" }),
    policeReport: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
    governmentInvolvement: z.enum(["yes", "no", "unsure"], { required_error: "Please select an option" }),
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
