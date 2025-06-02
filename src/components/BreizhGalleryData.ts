export const breizhGallery = [
  {
    id: 1,
    file: '/files/breizh/results/breizh_classification_gridview.png',
    title: 'BreizhCrops Classification Results',
    description: 'Displays the ground truth, model prediction, and pixel-level accuracy map side-by-side. The model achieved an overall accuracy of 68.5% across the 351 × 351 grid.',
  },
  {
    id: 2,
    file: '/files/breizh/results/Per-Class_Prediction_Accurac.png',
    title: 'Per-Class Accuracy Maps',
    description: 'Per-crop visualization of prediction accuracy in BreizhCrops. Green points indicate correctly predicted samples; red points show misclassifications.',
  },
  {
    id: 3,
    file: '/files/breizh/results/violin_correct_vs_wrong.png',
    title: 'DOY Distribution – Correct vs Incorrect (Violin)',
    description: 'Violin plots show the day-of-year distribution for correctly vs incorrectly predicted samples. Incorrect predictions are more concentrated between DOY 140–200.',
  },
  {
    id: 4,
    file: '/files/breizh/results/detailledConfmat.png',
    title: 'Detailed Confusion Matrix',
    description: 'Raw count confusion matrix across 9 classes in the Breizh dataset. Highlights confusion trends and misclassification patterns between similar crops.',
  },
  {
    id: 5,
    file: '/files/breizh/results/DOY.png',
    title: 'Stopping Day-of-Year Distribution',
    description: 'Histogram of predicted stopping days in BreizhCrops with mean ≈ 159 ± 28. Shows strong concentration around early June, indicating tighter phenological range.',
  },
  {
    id: 6,
    file: '/files/breizh/results/boxplot.png',
    title: 'DOY Distribution – Correct vs Incorrect (Box Plot)',
    description: 'Box plots comparing DOY distributions for correct and incorrect predictions. Useful for identifying whether temporal misalignment contributes to classification error.',
  },
  {
    id: 7,
    file: '/files/breizh/results/confmat.png',
    title: 'Normalized Confusion Matrix – 80% Accuracy',
    description: 'Confusion matrix normalized by recall for each class. Reveals precision/recall tradeoffs and classes with stronger model performance in Breizh.',
  },
  {
    id: 8,
    file: '/files/breizh/results/crops.png',
    title: 'Phenological Crop Distribution (DOY)',
    description: 'Box plots showing stopping DOY ranges per crop in Breizh. Useful for comparing seasonal timing between barley, wheat, corn, rapeseed, meadows, and orchards.',
  },
];
