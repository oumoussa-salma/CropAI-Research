export const bavarianGallery = [
    {
    id: 8,
    file: '/files/bavarian/results/confmat.png',
    title: 'Confusion Matrix – Overall Accuracy: 86%',
    description: 'Confusion matrix displaying per-class classification performance. Shows where the model tends to confuse similar crops, and includes recall scale.',
  },
  {
    id: 1,
    file: '/files/bavarian/results/TrueVSpredictedLabelMap.png',
    title: 'True vs Predicted Label Map',
    description: 'Visual comparison of model predictions with ground truth labels. The left map shows actual crop distribution, while the right reveals predicted outcomes. Discrepancies highlight misclassified regions.',
  },{
    id: 6,
    file: '/files/bavarian/results/doy.png',
    title: 'Distribution of Stopping Days (DOY)',
    description: 'Histogram of stopping dates for crop growth cycles, with an average around day 144 ± 66. Useful for defining phenological cutoffs.',
  },
  {
    id: 7,
    file: '/files/bavarian/results/crops.png',
    title: 'Phenological Ranges by Crop Type',
    description: 'Box plots showing when different crops typically stop growing (DOY). Highlights seasonal timing and variability between species.',
  },
  
  {
    id: 2,
    file: '/files/bavarian/results/Agr_classification_results.png',
    title: 'Classification Accuracy Map',
    description: 'Three-part grid: Ground truth, model predictions, and accuracy overlay. Green areas indicate correct classification, while red spots signal prediction errors. Accuracy here is ~75.4%.',
  },
  {
    id: 3,
    file: '/files/bavarian/results/2DprojectionsBenchmarking.png',
    title: '2D Projection Benchmark (PCA, t-SNE, UMAP)',
    description: 'Dimensionality reduction of crop features using PCA, t-SNE, and UMAP. The spread and clustering reveal how separable the crop classes are in low-dimensional space.',
  },
  {
    id: 4,
    file: '/files/bavarian/results/3DprojectionsBenchmarking.png',
    title: '3D Projection Benchmark (PCA, t-SNE, UMAP)',
    description: 'Similar to the 2D projection but in 3D. UMAP shows tighter clustering, suggesting it better preserves local neighborhood structures in the feature space.',
  },
  {
    id: 5,
    file: '/files/bavarian/results/GT_cropdistribution.png',
    title: 'Ground Truth Crop Distribution (Basemap Overlay)',
    description: 'Comparison of ground truth crop labels over different basemaps: OpenStreetMap, CartoDB, and ESRI. Provides visual context of crop types across geographic layers.',
  },  {
    id: 9,
    file: '/files/bavarian/results/violin_correct_vs_wrong.png',
    title: 'DOY Distribution for Correct vs Incorrect Predictions',
    description: 'Violin plot comparing day-of-year distributions for correctly and incorrectly predicted samples. Indicates misclassifications are more concentrated within narrower seasonal windows.',
  }
];
