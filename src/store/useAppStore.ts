import { create } from 'zustand';
import { AIVideoModel, CategoryFilter } from '../types/models';
import { aiVideoModels } from '../data/mockData';

interface AppState {
  // Data
  models: AIVideoModel[];
  searchQuery: string;
  activeCategoryFilter: CategoryFilter;
  
  // Modal states
  selectedModelId: string | null;
  selectedCategoryId: string | null;
  isCategoryModalOpen: boolean;
  isModelModalOpen: boolean;
  
  // Actions
  setSearchQuery: (query: string) => void;
  setCategoryFilter: (filter: CategoryFilter) => void;
  setSelectedModelId: (id: string | null) => void;
  setSelectedCategoryId: (id: string | null) => void;
  openCategoryModal: (id: string) => void;
  closeCategoryModal: () => void;
  openModelModal: (id: string) => void;
  closeModelModal: () => void;
  
  // Computed
  getFilteredModels: () => AIVideoModel[];
}

export const useAppStore = create<AppState>((set, get) => ({
  // Initial data
  models: aiVideoModels,
  searchQuery: '',
  activeCategoryFilter: 'all',
  
  // Initial modal states
  selectedModelId: null,
  selectedCategoryId: null,
  isCategoryModalOpen: false,
  isModelModalOpen: false,
  
  // Actions
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setCategoryFilter: (filter) => set({ activeCategoryFilter: filter }),
  
  setSelectedModelId: (id) => set({ selectedModelId: id }),
  
  setSelectedCategoryId: (id) => set({ selectedCategoryId: id }),
  
  openCategoryModal: (id) => set({ 
    selectedCategoryId: id, 
    isCategoryModalOpen: true 
  }),
  
  closeCategoryModal: () => set({ 
    isCategoryModalOpen: false,
    selectedCategoryId: null 
  }),
  
  openModelModal: (id) => set({ 
    selectedModelId: id, 
    isModelModalOpen: true 
  }),
  
  closeModelModal: () => set({ 
    isModelModalOpen: false,
    selectedModelId: null 
  }),
  
  // Computed
  getFilteredModels: () => {
    const { models, searchQuery, activeCategoryFilter } = get();
    
    return models.filter((model) => {
      const matchesSearch = searchQuery === '' || 
        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = activeCategoryFilter === 'all' || 
        model.categories.includes(activeCategoryFilter);
      
      return matchesSearch && matchesFilter;
    });
  }
}));
