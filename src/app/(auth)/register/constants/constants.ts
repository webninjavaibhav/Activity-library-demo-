type SubjectProp = {
  value: string;
  label: string;
};

type RoleProps = {
  value: string;
  label: string;
};

export const subjectOptions: SubjectProp[] = [
  { value: "science", label: "Science" },
  { value: "cte", label: "CTE" },
  { value: "ss", label: "SS" },
  { value: "history", label: "History" },
];

export const roleOptions: RoleProps[] = [
  { value: "principle", label: "Principle" },
  { value: "teacher", label: "Teacher" },
];
