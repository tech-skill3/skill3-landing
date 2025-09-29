export default function SkillMallPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Skill Mall
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore and acquire new skills from our comprehensive marketplace of AI-powered learning experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-3">Programming</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Master coding skills with AI-guided tutorials
            </p>
            <div className="text-primary font-medium">50+ Courses</div>
          </div>
          
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-3">Design</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn design principles and tools
            </p>
            <div className="text-primary font-medium">30+ Courses</div>
          </div>
          
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-3">Business</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Develop business and leadership skills
            </p>
            <div className="text-primary font-medium">40+ Courses</div>
          </div>
          
          <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-3">AI & ML</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Dive into artificial intelligence
            </p>
            <div className="text-primary font-medium">25+ Courses</div>
          </div>
        </div>
      </div>
    </div>
  )
}