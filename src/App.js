import React, { useState, Suspense, lazy } from 'react';
import { Zap, Tag, ArrowRight, Home, TrendingUp, Eye, BarChart3, Target, Lightbulb, Shield, DollarSign, Calendar, GitBranch } from 'lucide-react';

// Lazy load the feature components for better performance
const AINavigationCopilot = lazy(() => import('./sirion-negotiation-copilot'));
const MetadataNavigator = lazy(() => import('./metadata-navigator'));

export default function SirionAISuite() {
  const [selectedFeature, setSelectedFeature] = useState(null); // null, 'copilot', or 'navigator'

  const renderLandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-xl">
              <Zap className="text-white" size={36} />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Sirion AI Suite
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-2">Next-Generation Contract Intelligence Platform</p>
          <p className="text-gray-500">Powered by Advanced AI • Built for Enterprise</p>
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border-2 border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform How You Work with Contracts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your AI-powered workflow to unlock unprecedented insights, 
              accelerate negotiations, and make data-driven decisions with confidence.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">$222K</div>
              <div className="text-sm text-gray-600">Average Savings</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">90%</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">247</div>
              <div className="text-sm text-gray-600">Metadata Points</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Feature Selection Cards */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* AI Negotiation Copilot Card */}
          <div 
            onClick={() => setSelectedFeature('copilot')}
            className="group bg-white rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 duration-300"
          >
            <div className="p-8">
              {/* Icon & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Negotiation Copilot</h3>
                    <p className="text-sm text-gray-500">Strategic Intelligence</p>
                  </div>
                </div>
                <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" size={32} />
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg">
                Real-time AI coaching for contract negotiations. Get supplier intelligence, 
                market benchmarks, and strategic recommendations that predict outcomes with 85% accuracy.
              </p>

              {/* Key Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Shield className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Supplier Intelligence Profile</div>
                    <div className="text-sm text-gray-600">Financial health, negotiation patterns, key contacts</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Market Benchmarking</div>
                    <div className="text-sm text-gray-600">Compare against 47 similar contracts</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Predictive Analytics</div>
                    <div className="text-sm text-gray-600">70-85% success rate predictions</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Live Negotiation Guide</div>
                    <div className="text-sm text-gray-600">Real-time "what to say next" coaching</div>
                  </div>
                </div>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">$222K</div>
                  <div className="text-xs text-gray-600">Avg. Savings</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">60%</div>
                  <div className="text-xs text-gray-600">Faster Close</div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span>Launch Negotiation Copilot</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">Best for: </span>
                <span className="text-sm font-semibold text-gray-700">Procurement, Contract Negotiators</span>
              </div>
            </div>
          </div>

          {/* Metadata Navigator Card */}
          <div 
            onClick={() => setSelectedFeature('navigator')}
            className="group bg-white rounded-2xl shadow-xl border-2 border-transparent hover:border-teal-500 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 duration-300"
          >
            <div className="p-8">
              {/* Icon & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Tag className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Metadata Navigator</h3>
                    <p className="text-sm text-gray-500">Intelligent Extraction</p>
                  </div>
                </div>
                <ArrowRight className="text-teal-600 group-hover:translate-x-2 transition-transform" size={32} />
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg">
                Interactive navigation of contract metadata. Extract 247+ data points, 
                visualize timelines, map relationships, and compare contracts with AI-powered intelligence.
              </p>

              {/* Key Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Eye className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Visual Navigation</div>
                    <div className="text-sm text-gray-600">Click-to-clause interactive dashboard</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Timeline Visualization</div>
                    <div className="text-sm text-gray-600">All dates and deadlines on interactive timeline</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <GitBranch className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Relationship Mapping</div>
                    <div className="text-sm text-gray-600">Visual connections between clauses</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold text-gray-900">Cross-Contract Comparison</div>
                    <div className="text-sm text-gray-600">Side-by-side analysis of multiple contracts</div>
                  </div>
                </div>
              </div>

              {/* Value Props */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                  <div className="text-2xl font-bold text-teal-600 mb-1">247</div>
                  <div className="text-xs text-gray-600">Metadata Points</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">90%</div>
                  <div className="text-xs text-gray-600">Time Saved</div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span>Launch Metadata Navigator</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">Best for: </span>
                <span className="text-sm font-semibold text-gray-700">Legal Ops, Compliance, Analysis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Sirion AI Suite?</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">AI-First Platform</h4>
              <p className="text-blue-100 text-sm">
                Built from the ground up with AI at the core, not bolted on
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">Enterprise-Grade</h4>
              <p className="text-blue-100 text-sm">
                SOC 2, GDPR, ISO 27001 compliant with bank-level security
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-white" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2">Measurable ROI</h4>
              <p className="text-blue-100 text-sm">
                Average $222K savings per contract, 90% faster reviews
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">Sirion AI Suite • Redefining Contract Lifecycle Management</p>
          <p className="text-xs mt-2">Trusted by Fortune 500 Companies • Managing $800B in Contract Value</p>
        </div>
      </div>
    </div>
  );

  // Loading component
  const LoadingScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg font-semibold">Loading AI Suite...</p>
      </div>
    </div>
  );

  // Wrapper components with "Back to Home" button
  const CopilotWithHome = () => (
    <div className="relative">
      <button
        onClick={() => setSelectedFeature(null)}
        className="fixed top-8 left-8 z-50 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 shadow-lg flex items-center space-x-2 transition-all hover:scale-105"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
      <Suspense fallback={<LoadingScreen />}>
        <AINavigationCopilot />
      </Suspense>
    </div>
  );

  const NavigatorWithHome = () => (
    <div className="relative">
      <button
        onClick={() => setSelectedFeature(null)}
        className="fixed top-8 left-8 z-50 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 shadow-lg flex items-center space-x-2 transition-all hover:scale-105"
      >
        <Home size={20} />
        <span>Back to Home</span>
      </button>
      <Suspense fallback={<LoadingScreen />}>
        <MetadataNavigator />
      </Suspense>
    </div>
  );

  // Main render logic
  if (selectedFeature === 'copilot') {
    return <CopilotWithHome />;
  } else if (selectedFeature === 'navigator') {
    return <NavigatorWithHome />;
  } else {
    return renderLandingPage();
  }
}