export interface IBoard {
  id: string;
  type: number;
  company: { name: string };
  applyingDate: string;
  position: string;
  source: string;
  status: string;
  salary: string;
  nextInterviewDate: string;
  currentStage: string;
}

export const initialData = [
  {
    id: "1",
    type: 1,
    company: { name: "Test Company" },
    applyingDate: "2023-06-01",
    position: "Developer",
    source: "Online",
    status: "Applied",
    salary: "1000-2000",
    nextInterviewDate: "2023-06-10",
    currentStage: "Phone Screen",
  },
  {
    id: "2",
    type: 2,
    company: { name: "Another Company" },
    applyingDate: "2023-06-02",
    position: "Designer",
    source: "Referral",
    status: "Interviewed",
    salary: "1500-2500",
    nextInterviewDate: "2023-06-12",
    currentStage: "Onsite Interview",
  },
  {
    id: "3",
    type: 3,
    company: { name: "Epam" },
    applyingDate: "2023-06-02",
    position: "Senior React Developer",
    source: "Online",
    status: "Applied",
    salary: "1000-2000",
    nextInterviewDate: "2023-06-10",
    currentStage: "Phone Screen",
  },
  {
    id: "4",
    type: 3,
    company: { name: "Wargaming" },
    applyingDate: "2023-06-02",
    position: "Junior React Developer",
    source: "Online",
    status: "Applied",
    salary: "1000-2000",
    nextInterviewDate: "2023-06-10",
    currentStage: "Phone Screen",
  },
  {
    id: "5",
    type: 4,
    company: { name: "Epam and to4ka" },
    applyingDate: "2023-06-02",
    position: "Junior Python Developer",
    source: "Online",
    status: "Applied",
    salary: "1000-2000",
    nextInterviewDate: "2023-06-10",
    currentStage: "Phone Screen",
  },
];
