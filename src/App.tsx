import React, { useState } from 'react';
import { Search, User, MessageCircle, TrendingUp, Brain, Loader2, AlertCircle, Twitter } from 'lucide-react';

interface AnalysisResult {
  personality: string;
  tweetingStyle: string;
  topTopics: string[];
  sentimentAnalysis: string;
  engagementPattern: string;
  summary: string;
}

function App() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter a Twitter username');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      // Replace with your actual backend URL
      const response = await fetch('/api/analyze-twitter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username.replace('@', '') }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze Twitter profile');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">
            <Twitter className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Twitter Personality Analyzer
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Discover insights about any Twitter user's personality and tweeting patterns using AI analysis
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-4xl">
          {/* Input Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username (e.g., @elonmusk or elonmusk)"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    disabled={loading}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Analyzing tweets...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span>Analyze Profile</span>
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Results */}
          {result && (
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">AI Analysis Summary</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{result.summary}</p>
              </div>

              {/* Detailed Analysis Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personality */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Personality Type</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{result.personality}</p>
                </div>

                {/* Tweeting Style */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Tweeting Style</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{result.tweetingStyle}</p>
                </div>

                {/* Top Topics */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Top Topics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.topTopics.map((topic, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sentiment Analysis */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Sentiment Pattern</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{result.sentimentAnalysis}</p>
                </div>
              </div>

              {/* Engagement Pattern */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Engagement Pattern</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{result.engagementPattern}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">
          <p className="text-sm">
            Powered by AI • Analyzing the last 100 tweets for personality insights
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;