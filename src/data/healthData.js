// src/data/healthData.js

export const healthMetrics = {
  bloodPressure: {
    systolic: 120,
    diastolic: 80,
    status: "normal",
    lastUpdated: "2025-05-25",
    trend: "stable"
  },
  heartRate: {
    current: 72,
    resting: 68,
    status: "normal",
    lastUpdated: "2025-05-25",
    trend: "stable"
  },
  temperature: {
    current: 98.6,
    status: "normal",
    lastUpdated: "2025-05-25",
    unit: "°F"
  },
  oxygenSaturation: {
    current: 98,
    status: "normal",
    lastUpdated: "2025-05-25",
    unit: "%"
  }
};

export const vitalSigns = [
  {
    id: 1,
    date: "2025-05-25",
    bloodPressure: "120/80",
    heartRate: 72,
    temperature: 98.6,
    weight: 165,
    height: 70
  },
  {
    id: 2,
    date: "2025-05-20",
    bloodPressure: "118/78",
    heartRate: 70,
    temperature: 98.4,
    weight: 164,
    height: 70
  },
  {
    id: 3,
    date: "2025-05-15",
    bloodPressure: "122/82",
    heartRate: 74,
    temperature: 98.7,
    weight: 166,
    height: 70
  }
];

export const healthAlerts = [
  {
    id: 1,
    type: "reminder",
    title: "Medication Reminder",
    message: "Time to take your daily medication",
    priority: "medium",
    timestamp: "2025-05-25T09:00:00Z"
  },
  {
    id: 2,
    type: "appointment",
    title: "Upcoming Appointment",
    message: "You have an appointment tomorrow at 10:30 AM",
    priority: "high",
    timestamp: "2025-05-25T08:00:00Z"
  }
];

export const healthGoals = [
  {
    id: 1,
    title: "Daily Steps",
    target: 10000,
    current: 7500,
    unit: "steps",
    progress: 75
  },
  {
    id: 2,
    title: "Water Intake",
    target: 8,
    current: 6,
    unit: "glasses",
    progress: 75
  },
  {
    id: 3,
    title: "Sleep Duration",
    target: 8,
    current: 7.5,
    unit: "hours",
    progress: 94
  }
];

export const medications = [
  {
    id: 1,
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    timeOfDay: "Morning",
    startDate: "2025-01-15",
    endDate: null,
    prescribedBy: "Dr. Sarah Johnson"
  },
  {
    id: 2,
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    timeOfDay: "Morning & Evening",
    startDate: "2025-02-01",
    endDate: null,
    prescribedBy: "Dr. Michael Chen"
  }
];

export const medicalHistory = [
  {
    id: 1,
    type: "Blood Test",
    status: "completed",
    results: "Normal",
    date: "2025-05-20",
    doctor: "Dr. Smith"
  },
  {
    id: 2,
    type: "X-Ray",
    status: "pending",
    results: "Awaiting results",
    date: "2025-05-22",
    doctor: "Dr. Johnson"
  }
];

export const appointments = [
  {
    id: 1,
    patient: "John Doe",
    doctor: "Dr. Smith",
    specialty: "Cardiology",
    date: "2025-05-25",
    time: "10:30 AM",
    type: "Consultation",
    status: "confirmed",
    duration: "30 mins"
  },
  {
    id: 2,
    patient: "Jane Roe",
    doctor: "Dr. Adams",
    specialty: "Dermatology",
    date: "2025-05-25",
    time: "2:00 PM",
    type: "Follow-up",
    status: "pending",
    duration: "45 mins"
  },
  {
    id: 3,
    patient: "Alice Smith",
    doctor: "Dr. Brown",
    specialty: "Neurology",
    date: "2025-05-26",
    time: "11:00 AM",
    type: "Consultation",
    status: "completed",
    duration: "60 mins"
  },
  {
    id: 4,
    patient: "Bob Johnson",
    doctor: "Dr. Green",
    specialty: "Orthopedics",
    date: "2025-05-27",
    time: "9:00 AM",
    type: "Surgery",
    status: "cancelled",
    duration: "120 mins"
  }
];

// Added statistics object matching your StatisticsView component
export const statistics = {
  totalPatients: 12500,
  todayAppointments: 34,
  monthlyRevenue: 420000,
  patientSatisfaction: 4.6,

  departmentStats: [
    { name: "Cardiology", patients: 3200, revenue: 150000, satisfaction: 4.7 },
    { name: "Neurology", patients: 2100, revenue: 100000, satisfaction: 4.4 },
    { name: "Orthopedics", patients: 1800, revenue: 90000, satisfaction: 4.5 },
    { name: "Pediatrics", patients: 1500, revenue: 80000, satisfaction: 4.3 },
  ],

  monthlyTrends: [
    { month: "Jan", patients: 2000, revenue: 60000 },
    { month: "Feb", patients: 2300, revenue: 65000 },
    { month: "Mar", patients: 2800, revenue: 70000 },
    { month: "Apr", patients: 3000, revenue: 80000 },
    { month: "May", patients: 3100, revenue: 85000 },
  ],
};

export const healthData = {
  healthMetrics,
  vitalSigns,
  healthAlerts,
  healthGoals,
  medications,
  medicalHistory,
  appointments,
  statistics  // <-- important to include statistics here
};
