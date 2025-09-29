export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Company & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn more about our company, mission, and access helpful resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Skill³</h2>
            <p className="text-muted-foreground mb-4">
              We are revolutionizing skill development and verification through the power of AI and blockchain technology.
            </p>
            <p className="text-muted-foreground">
              Our mission is to create a decentralized ecosystem where skills are accurately assessed, 
              verified, and rewarded in a transparent and trustworthy manner.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Resources</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guides and API documentation
                </p>
              </div>
              
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-semibold mb-2">White Paper</h3>
                <p className="text-sm text-muted-foreground">
                  Technical details and vision for the future
                </p>
              </div>
              
              <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Join our growing community of learners and creators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}