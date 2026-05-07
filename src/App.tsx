import { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';
import { categories, futurePredictions } from './data/mockData';
import { CategoryFilter, AIVideoModel } from './types/models';
import { AuroraBackgroundDemo } from './components/demo';

// ===========================================
// Utility Functions
// ===========================================

const getPricingBadgeColor = (tier: string) => {
  switch (tier) {
    case 'free': return 'bg-green-100 text-green-700';
    case 'freemium': return 'bg-purple-100 text-purple-700';
    case 'paid': return 'bg-amber-100 text-amber-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const getImpactBadgeColor = (impact: string) => {
  switch (impact) {
    case 'revolutionary': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
    case 'high': return 'bg-red-100 text-red-700';
    case 'medium': return 'bg-amber-100 text-amber-700';
    case 'low': return 'bg-green-100 text-green-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

// ===========================================
// Components
// ===========================================

function Header() {
  const { searchQuery, setSearchQuery, activeCategoryFilter, setCategoryFilter } = useAppStore();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass px-8 py-4 flex justify-between items-center transition-all duration-300">
      <a href="#" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
          ▶
        </div>
        <span className="text-xl font-extrabold tracking-tight">VidForge</span>
      </a>
      <nav className="hidden md:flex gap-8">
        <a href="#hero" className="text-gray-600 hover:text-indigo-600 font-medium no-underline transition-colors">Home</a>
        <a href="#categories" className="text-gray-600 hover:text-indigo-600 font-medium no-underline transition-colors">Categories</a>
        <a href="#models" className="text-gray-600 hover:text-indigo-600 font-medium no-underline transition-colors">Models</a>
        <a href="#future" className="text-gray-600 hover:text-indigo-600 font-medium no-underline transition-colors">Future</a>
      </nav>
    </header>
  );
}

function HeroSection() {
  const { searchQuery, setSearchQuery, models } = useAppStore();
  
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-purple-200 rounded-full opacity-30 animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse-slow"></span>
          <span className="text-sm font-semibold text-indigo-600">{models.length}+ AI Models Available</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Discover <span className="gradient-text">AI Video Generation</span>
        </h1>
        
        <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Explore the most powerful AI models transforming text and images into stunning video content. Your gateway to the future.
        </p>
        
        {/* Stats */}
        <div className="flex justify-center gap-12 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-indigo-600">{models.length}+</div>
            <div className="text-sm text-gray-500 font-medium">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-indigo-600">4</div>
            <div className="text-sm text-gray-500 font-medium">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-indigo-600">8</div>
            <div className="text-sm text-gray-500 font-medium">Future Predictions</div>
          </div>
        </div>
        
        {/* Search */}
        <div className="relative max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="Search AI video models..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 shadow-md transition-all"
          />
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, onClick }: { category: typeof categories[0]; onClick: () => void }) {
  const { models } = useAppStore();
  const modelCount = models.filter(m => m.categories.includes(category.id)).length;
  
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover cursor-pointer transition-all duration-300 card-hover relative overflow-hidden"
      style={{ '--card-accent': category.color } as React.CSSProperties}
    >
      <div 
        className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 hover:opacity-100"
        style={{ background: category.color }}
      ></div>
      <div className="text-4xl mb-4">{category.icon}</div>
      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{category.description}</p>
      <div className="flex gap-6 pt-4 border-t border-gray-100">
        <div>
          <div className="text-2xl font-extrabold text-indigo-600">{modelCount}</div>
          <div className="text-xs text-gray-400 font-medium">Models</div>
        </div>
        <div>
          <div className="text-2xl font-extrabold text-indigo-600">{category.useCases.length}</div>
          <div className="text-xs text-gray-400 font-medium">Use Cases</div>
        </div>
      </div>
    </div>
  );
}

function CategoryModal() {
  const { selectedCategoryId, isCategoryModalOpen, closeCategoryModal } = useAppStore();
  const category = categories.find(c => c.id === selectedCategoryId);
  
  if (!category || !isCategoryModalOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={closeCategoryModal}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-xl animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={closeCategoryModal}
          className="absolute top-4 right-4 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          ✕
        </button>
        
        <div className="flex items-center gap-5 mb-6">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <h2 className="text-2xl font-extrabold">{category.name}</h2>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{category.description}</p>
        
        <div className="mb-6">
          <h3 className="text-sm font-bold text-indigo-600 mb-3 uppercase tracking-wide">Use Cases</h3>
          <div className="space-y-2">
            {category.useCases.map((useCase, i) => (
              <div key={i} className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium">
                → {useCase}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-bold text-indigo-600 mb-3 uppercase tracking-wide">Future Impact</h3>
          <div className="space-y-2">
            {category.futureImpact.map((impact, i) => (
              <div key={i} className="bg-gray-50 px-4 py-2 rounded-lg text-sm">
                ✨ {impact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategorySection() {
  const { openCategoryModal } = useAppStore();
  
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Video Generation Categories</h2>
          <p className="text-gray-500 text-lg">Click on a category to explore use cases and future impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              onClick={() => openCategoryModal(category.id)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterPills() {
  const { activeCategoryFilter, setCategoryFilter } = useAppStore();
  const filters: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'text-to-video', label: 'Text-to-Video' },
    { id: 'image-to-video', label: 'Image-to-Video' },
    { id: 'animation', label: 'Animation' },
    { id: 'video-to-video', label: 'Video-to-Video' },
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setCategoryFilter(filter.id)}
          className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
            activeCategoryFilter === filter.id
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

function ModelCard({ model }: { model: AIVideoModel }) {
  const { openModelModal } = useAppStore();
  
  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 card-hover group cursor-pointer"
      onClick={() => openModelModal(model.id)}
    >
      {/* Image Container - Top 2/3 */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={model.imageUrl}
          alt={`Screenshot of ${model.name}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a 
            href={model.website} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="px-4 py-2 bg-white text-sm font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform"
          >
            Visit Site
          </a>
        </div>
        {/* Pricing Badge */}
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getPricingBadgeColor(model.pricingTier)}`}>
          {model.pricingTier}
        </span>
      </div>
      
      {/* Text Content - Bottom 1/3 */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{model.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{model.company}</p>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{model.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {model.features.slice(0, 2).map((feature, i) => (
              <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                {feature}
              </span>
            ))}
          </div>
          <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
            Details →
          </button>
        </div>
      </div>
    </div>
  );
}

function ModelModal() {
  const { selectedModelId, isModelModalOpen, closeModelModal, models } = useAppStore();
  const model = models.find(m => m.id === selectedModelId);
  
  if (!model || !isModelModalOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={closeModelModal}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-xl animate-fade-in max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={closeModelModal}
          className="absolute top-4 right-4 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          ✕
        </button>
        
        {/* Image */}
        <div className="relative h-56 rounded-xl overflow-hidden mb-6">
          <img
            src={model.imageUrl}
            alt={model.name}
            className="w-full h-full object-cover"
          />
          <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getPricingBadgeColor(model.pricingTier)}`}>
            {model.pricingTier}
          </span>
        </div>
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-extrabold text-white"
            style={{ background: `linear-gradient(135deg, ${model.stats.rating > 4.5 ? '#6366f1' : '#8b5cf6'}, #ec4899)` }}
          >
            {model.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold">{model.name}</h2>
            <p className="text-sm text-indigo-600 font-medium">{model.company}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{model.fullDescription}</p>
        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <div className="text-lg font-extrabold text-indigo-600">{model.stats.maxDuration}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Max Duration</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <div className="text-lg font-extrabold text-indigo-600">{model.stats.resolution}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Resolution</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <div className="text-lg font-extrabold text-indigo-600">{model.stats.rating}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Rating</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <div className="text-lg font-extrabold text-indigo-600">{model.stats.launchYear}</div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Launch Year</div>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-indigo-600 mb-3 uppercase tracking-wide">Key Features</h3>
          <div className="flex flex-wrap gap-2">
            {model.features.map((feature, i) => (
              <span key={i} className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <a 
          href={model.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
        >
          Visit Official Website
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

function ModelsSection() {
  const { getFilteredModels, searchQuery, activeCategoryFilter } = useAppStore();
  const filteredModels = getFilteredModels();
  
  return (
    <section id="models" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">All AI Video Models</h2>
          <p className="text-gray-500 text-lg">Comprehensive directory of video generation tools</p>
        </div>
        
        <FilterPills />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredModels.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
        
        {filteredModels.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-2">No models found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}

function FutureCard({ prediction }: { prediction: typeof futurePredictions[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
      <div className="text-sm font-bold text-indigo-600 mb-2">{prediction.year}</div>
      <h3 className="text-lg font-bold mb-3">{prediction.title}</h3>
      <p className="text-sm text-gray-500 mb-4">{prediction.description}</p>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getImpactBadgeColor(prediction.impact)}`}>
        {prediction.impact}
      </span>
    </div>
  );
}

function FutureSection() {
  return (
    <section id="future" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-100 rounded-full opacity-50"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Future of AI Video</h2>
          <p className="text-gray-500 text-lg">How AI will transform video creation in the coming years</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {futurePredictions.map((prediction, i) => (
            <FutureCard key={i} prediction={prediction} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-gray-50 border-t border-gray-200 text-center">
      <p className="text-gray-500">
        Built with <span className="text-indigo-600">♥</span> • Showcasing the best in AI video generation
      </p>
    </footer>
  );
}

// ===========================================
// Main App Component
// ===========================================

function App() {
  return (
    <div className="min-h-screen">
      <AuroraBackgroundDemo />
      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
      <CategorySection />
      <ModelsSection />
      <FutureSection />
      <Footer />
      
      {/* Modals */}
      <CategoryModal />
      <ModelModal />
    </div>
  );
}

export default App;
