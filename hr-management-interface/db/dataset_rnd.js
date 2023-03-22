const rndEmps = [
  {
    Age: 49,
    Attrition: "No",
    BusinessTravel: "Travel_Frequently",
    DailyRate: 279,
    Department: "Research & Development",
    DistanceFromHome: 8,
    Education: 1,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 36,
    EnvironmentSatisfaction: 3,
    Gender: "Male",
    HourlyRate: 61,
    JobInvolvement: 2,
    JobLevel: 2,
    JobRole: "Research Scientist",
    JobSatisfaction: 2,
    MaritalStatus: "Married",
    MonthlyIncome: 5130,
    MonthlyRate: 24907,
    NumCompaniesWorked: 1,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 23,
    PerformanceRating: 4,
    RelationshipSatisfaction: 4,
    StandardHours: 80,
    StockOptionLevel: 1,
    TotalWorkingYears: 10,
    TrainingTimesLastYear: 3,
    WorkLifeBalance: 3,
    YearsAtCompany: 10,
    YearsInCurrentRole: 7,
    YearsSinceLastPromotion: 1,
    YearsWithCurrManager: 7,
  },
  {
    Age: 37,
    Attrition: "Yes",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 1373,
    Department: "Research & Development",
    DistanceFromHome: 2,
    Education: 2,
    EducationField: "Other",
    EmployeeCount: 1,
    EmployeeNumber: 25,
    EnvironmentSatisfaction: 4,
    Gender: "Male",
    HourlyRate: 92,
    JobInvolvement: 2,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 3,
    MaritalStatus: "Single",
    MonthlyIncome: 2090,
    MonthlyRate: 2396,
    NumCompaniesWorked: 6,
    Over18: "Y",
    OverTime: "Yes",
    PercentSalaryHike: 15,
    PerformanceRating: 3,
    RelationshipSatisfaction: 2,
    StandardHours: 80,
    StockOptionLevel: 0,
    TotalWorkingYears: 7,
    TrainingTimesLastYear: 3,
    WorkLifeBalance: 3,
    YearsAtCompany: 0,
    YearsInCurrentRole: 0,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 0,
  },
  {
    Age: 33,
    Attrition: "No",
    BusinessTravel: "Travel_Frequently",
    DailyRate: 1392,
    Department: "Research & Development",
    DistanceFromHome: 3,
    Education: 4,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 6,
    EnvironmentSatisfaction: 4,
    Gender: "Female",
    HourlyRate: 56,
    JobInvolvement: 3,
    JobLevel: 1,
    JobRole: "Research Scientist",
    JobSatisfaction: 3,
    MaritalStatus: "Married",
    MonthlyIncome: 2909,
    MonthlyRate: 23159,
    NumCompaniesWorked: 1,
    Over18: "Y",
    OverTime: "Yes",
    PercentSalaryHike: 11,
    PerformanceRating: 3,
    RelationshipSatisfaction: 3,
    StandardHours: 80,
    StockOptionLevel: 0,
    TotalWorkingYears: 8,
    TrainingTimesLastYear: 3,
    WorkLifeBalance: 3,
    YearsAtCompany: 8,
    YearsInCurrentRole: 7,
    YearsSinceLastPromotion: 3,
    YearsWithCurrManager: 0,
  },
  {
    Age: 27,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 591,
    Department: "Research & Development",
    DistanceFromHome: 2,
    Education: 1,
    EducationField: "Medical",
    EmployeeCount: 1,
    EmployeeNumber: 49,
    EnvironmentSatisfaction: 1,
    Gender: "Male",
    HourlyRate: 40,
    JobInvolvement: 3,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 2,
    MaritalStatus: "Married",
    MonthlyIncome: 3468,
    MonthlyRate: 16632,
    NumCompaniesWorked: 9,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 12,
    PerformanceRating: 3,
    RelationshipSatisfaction: 4,
    StandardHours: 80,
    StockOptionLevel: 1,
    TotalWorkingYears: 6,
    TrainingTimesLastYear: 3,
    WorkLifeBalance: 3,
    YearsAtCompany: 2,
    YearsInCurrentRole: 2,
    YearsSinceLastPromotion: 2,
    YearsWithCurrManager: 2,
  },
  {
    Age: 32,
    Attrition: "No",
    BusinessTravel: "Travel_Frequently",
    DailyRate: 1005,
    Department: "Research & Development",
    DistanceFromHome: 2,
    Education: 2,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 30,
    EnvironmentSatisfaction: 4,
    Gender: "Male",
    HourlyRate: 79,
    JobInvolvement: 3,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 4,
    MaritalStatus: "Single",
    MonthlyIncome: 3068,
    MonthlyRate: 11864,
    NumCompaniesWorked: 0,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 13,
    PerformanceRating: 3,
    RelationshipSatisfaction: 3,
    StandardHours: 80,
    StockOptionLevel: 0,
    TotalWorkingYears: 8,
    TrainingTimesLastYear: 2,
    WorkLifeBalance: 2,
    YearsAtCompany: 7,
    YearsInCurrentRole: 7,
    YearsSinceLastPromotion: 3,
    YearsWithCurrManager: 6,
  },
  {
    Age: 59,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 1324,
    Department: "Research & Development",
    DistanceFromHome: 3,
    Education: 3,
    EducationField: "Medical",
    EmployeeCount: 1,
    EmployeeNumber: 2,
    EnvironmentSatisfaction: 3,
    Gender: "Female",
    HourlyRate: 81,
    JobInvolvement: 4,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 1,
    MaritalStatus: "Married",
    MonthlyIncome: 2670,
    MonthlyRate: 9964,
    NumCompaniesWorked: 4,
    Over18: "Y",
    OverTime: "Yes",
    PercentSalaryHike: 20,
    PerformanceRating: 4,
    RelationshipSatisfaction: 1,
    StandardHours: 80,
    StockOptionLevel: 3,
    TotalWorkingYears: 12,
    TrainingTimesLastYear: 3,
    WorkLifeBalance: 2,
    YearsAtCompany: 1,
    YearsInCurrentRole: 0,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 0,
  },
  {
    Age: 30,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 1358,
    Department: "Research & Development",
    DistanceFromHome: 24,
    Education: 1,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 21,
    EnvironmentSatisfaction: 4,
    Gender: "Male",
    HourlyRate: 67,
    JobInvolvement: 3,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 3,
    MaritalStatus: "Divorced",
    MonthlyIncome: 2693,
    MonthlyRate: 13335,
    NumCompaniesWorked: 1,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 22,
    PerformanceRating: 4,
    RelationshipSatisfaction: 2,
    StandardHours: 80,
    StockOptionLevel: 1,
    TotalWorkingYears: 1,
    TrainingTimesLastYear: 2,
    WorkLifeBalance: 3,
    YearsAtCompany: 1,
    YearsInCurrentRole: 0,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 0,
  },
  {
    Age: 38,
    Attrition: "No",
    BusinessTravel: "Travel_Frequently",
    DailyRate: 216,
    Department: "Research & Development",
    DistanceFromHome: 23,
    Education: 3,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 13,
    EnvironmentSatisfaction: 4,
    Gender: "Male",
    HourlyRate: 44,
    JobInvolvement: 2,
    JobLevel: 3,
    JobRole: "Manufacturing Director",
    JobSatisfaction: 3,
    MaritalStatus: "Single",
    MonthlyIncome: 9526,
    MonthlyRate: 8787,
    NumCompaniesWorked: 0,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 21,
    PerformanceRating: 4,
    RelationshipSatisfaction: 2,
    StandardHours: 80,
    StockOptionLevel: 0,
    TotalWorkingYears: 10,
    TrainingTimesLastYear: 2,
    WorkLifeBalance: 3,
    YearsAtCompany: 9,
    YearsInCurrentRole: 7,
    YearsSinceLastPromotion: 1,
    YearsWithCurrManager: 8,
  },
  {
    Age: 36,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 1299,
    Department: "Research & Development",
    DistanceFromHome: 27,
    Education: 3,
    EducationField: "Medical",
    EmployeeCount: 1,
    EmployeeNumber: 10,
    EnvironmentSatisfaction: 3,
    Gender: "Male",
    HourlyRate: 94,
    JobInvolvement: 3,
    JobLevel: 2,
    JobRole: "Healthcare Representative",
    JobSatisfaction: 3,
    MaritalStatus: "Married",
    MonthlyIncome: 5237,
    MonthlyRate: 16577,
    NumCompaniesWorked: 6,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 13,
    PerformanceRating: 3,
    RelationshipSatisfaction: 2,
    StandardHours: 80,
    StockOptionLevel: 2,
    TotalWorkingYears: 17,
    TrainingTimesLastYear: 3,
    WorkLifeBalance: 2,
    YearsAtCompany: 7,
    YearsInCurrentRole: 7,
    YearsSinceLastPromotion: 7,
    YearsWithCurrManager: 7,
  },
  {
    Age: 35,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 809,
    Department: "Research & Development",
    DistanceFromHome: 16,
    Education: 3,
    EducationField: "Medical",
    EmployeeCount: 1,
    EmployeeNumber: 43,
    EnvironmentSatisfaction: 1,
    Gender: "Male",
    HourlyRate: 84,
    JobInvolvement: 4,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 2,
    MaritalStatus: "Married",
    MonthlyIncome: 2426,
    MonthlyRate: 16479,
    NumCompaniesWorked: 0,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 13,
    PerformanceRating: 3,
    RelationshipSatisfaction: 3,
    StandardHours: 80,
    StockOptionLevel: 1,
    TotalWorkingYears: 6,
    TrainingTimesLastYear: 5,
    WorkLifeBalance: 3,
    YearsAtCompany: 5,
    YearsInCurrentRole: 4,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 3,
  },
  {
    Age: 29,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 153,
    Department: "Research & Development",
    DistanceFromHome: 15,
    Education: 2,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 4,
    EnvironmentSatisfaction: 4,
    Gender: "Female",
    HourlyRate: 49,
    JobInvolvement: 2,
    JobLevel: 2,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 3,
    MaritalStatus: "Single",
    MonthlyIncome: 4193,
    MonthlyRate: 12682,
    NumCompaniesWorked: 0,
    Over18: "Y",
    OverTime: "Yes",
    PercentSalaryHike: 12,
    PerformanceRating: 3,
    RelationshipSatisfaction: 4,
    StandardHours: 80,
    StockOptionLevel: 0,
    TotalWorkingYears: 10,
    TrainingTimesLastYear: 3,
    WorkLifeBalance: 3,
    YearsAtCompany: 9,
    YearsInCurrentRole: 5,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 8,
  },
  {
    Age: 31,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 670,
    Department: "Research & Development",
    DistanceFromHome: 26,
    Education: 1,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 19,
    EnvironmentSatisfaction: 1,
    Gender: "Male",
    HourlyRate: 31,
    JobInvolvement: 3,
    JobLevel: 1,
    JobRole: "Research Scientist",
    JobSatisfaction: 3,
    MaritalStatus: "Divorced",
    MonthlyIncome: 2911,
    MonthlyRate: 15170,
    NumCompaniesWorked: 1,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 17,
    PerformanceRating: 3,
    RelationshipSatisfaction: 4,
    StandardHours: 80,
    StockOptionLevel: 1,
    TotalWorkingYears: 5,
    TrainingTimesLastYear: 1,
    WorkLifeBalance: 2,
    YearsAtCompany: 5,
    YearsInCurrentRole: 2,
    YearsSinceLastPromotion: 4,
    YearsWithCurrManager: 3,
  },
  {
    Age: 34,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 1346,
    Department: "Research & Development",
    DistanceFromHome: 19,
    Education: 2,
    EducationField: "Medical",
    EmployeeCount: 1,
    EmployeeNumber: 39,
    EnvironmentSatisfaction: 2,
    Gender: "Male",
    HourlyRate: 93,
    JobInvolvement: 3,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 4,
    MaritalStatus: "Divorced",
    MonthlyIncome: 2661,
    MonthlyRate: 8758,
    NumCompaniesWorked: 0,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 11,
    PerformanceRating: 3,
    RelationshipSatisfaction: 3,
    StandardHours: 80,
    StockOptionLevel: 1,
    TotalWorkingYears: 3,
    TrainingTimesLastYear: 2,
    WorkLifeBalance: 3,
    YearsAtCompany: 2,
    YearsInCurrentRole: 2,
    YearsSinceLastPromotion: 1,
    YearsWithCurrManager: 2,
  },
  {
    Age: 28,
    Attrition: "Yes",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 103,
    Department: "Research & Development",
    DistanceFromHome: 24,
    Education: 3,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 16,
    EnvironmentSatisfaction: 3,
    Gender: "Male",
    HourlyRate: 50,
    JobInvolvement: 2,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 3,
    MaritalStatus: "Single",
    MonthlyIncome: 2028,
    MonthlyRate: 12947,
    NumCompaniesWorked: 5,
    Over18: "Y",
    OverTime: "Yes",
    PercentSalaryHike: 14,
    PerformanceRating: 3,
    RelationshipSatisfaction: 2,
    StandardHours: 80,
    StockOptionLevel: 0,
    TotalWorkingYears: 6,
    TrainingTimesLastYear: 4,
    WorkLifeBalance: 3,
    YearsAtCompany: 4,
    YearsInCurrentRole: 2,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 3,
  },
  {
    Age: 29,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 1389,
    Department: "Research & Development",
    DistanceFromHome: 21,
    Education: 4,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 41,
    EnvironmentSatisfaction: 2,
    Gender: "Female",
    HourlyRate: 51,
    JobInvolvement: 4,
    JobLevel: 3,
    JobRole: "Manufacturing Director",
    JobSatisfaction: 1,
    MaritalStatus: "Divorced",
    MonthlyIncome: 9980,
    MonthlyRate: 10195,
    NumCompaniesWorked: 1,
    Over18: "Y",
    OverTime: "No",
    PercentSalaryHike: 11,
    PerformanceRating: 3,
    RelationshipSatisfaction: 3,
    StandardHours: 80,
    StockOptionLevel: 1,
    TotalWorkingYears: 10,
    TrainingTimesLastYear: 1,
    WorkLifeBalance: 3,
    YearsAtCompany: 10,
    YearsInCurrentRole: 9,
    YearsSinceLastPromotion: 8,
    YearsWithCurrManager: 8,
  },
  {
    Age: 32,
    Attrition: "No",
    BusinessTravel: "Travel_Rarely",
    DailyRate: 334,
    Department: "Research & Development",
    DistanceFromHome: 5,
    Education: 2,
    EducationField: "Life Sciences",
    EmployeeCount: 1,
    EmployeeNumber: 7,
    EnvironmentSatisfaction: 1,
    Gender: "Male",
    HourlyRate: 80,
    JobInvolvement: 4,
    JobLevel: 1,
    JobRole: "Research Scientist",
    JobSatisfaction: 2,
    MaritalStatus: "Divorced",
    MonthlyIncome: 3298,
    MonthlyRate: 15053,
    NumCompaniesWorked: 0,
    Over18: "Y",
    OverTime: "Yes",
    PercentSalaryHike: 12,
    PerformanceRating: 3,
    RelationshipSatisfaction: 4,
    StandardHours: 80,
    StockOptionLevel: 2,
    TotalWorkingYears: 7,
    TrainingTimesLastYear: 5,
    WorkLifeBalance: 2,
    YearsAtCompany: 6,
    YearsInCurrentRole: 2,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 5,
  },
  {
    Age: 22,
    Attrition: "No",
    BusinessTravel: "Non-Travel",
    DailyRate: 1123,
    Department: "Research & Development",
    DistanceFromHome: 16,
    Education: 2,
    EducationField: "Medical",
    EmployeeCount: 1,
    EmployeeNumber: 14,
    EnvironmentSatisfaction: 4,
    Gender: "Male",
    HourlyRate: 96,
    JobInvolvement: 4,
    JobLevel: 1,
    JobRole: "Laboratory Technician",
    JobSatisfaction: 4,
    MaritalStatus: "Divorced",
    MonthlyIncome: 2935,
    MonthlyRate: 7324,
    NumCompaniesWorked: 1,
    Over18: "Y",
    OverTime: "Yes",
    PercentSalaryHike: 13,
    PerformanceRating: 3,
    RelationshipSatisfaction: 2,
    StandardHours: 80,
    StockOptionLevel: 2,
    TotalWorkingYears: 1,
    TrainingTimesLastYear: 2,
    WorkLifeBalance: 2,
    YearsAtCompany: 1,
    YearsInCurrentRole: 0,
    YearsSinceLastPromotion: 0,
    YearsWithCurrManager: 0,
  },
];

export default rndEmps;
