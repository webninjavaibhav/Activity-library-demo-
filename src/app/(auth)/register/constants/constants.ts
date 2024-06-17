type SubjectProp = {
  value: boolean;
  label: string;
};

export const subjectOptions: SubjectProp[] = [
  { value: false, label: "No" },
  { value:true, label: "Yes" },
];

export const genders = [
  { value:'male', label: "Male"},
  { value:'female', label: "Female" },
  { value:'i don\'t want to answer', label: "I don't want to answer" },
]
