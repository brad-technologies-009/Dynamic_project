"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, Users, Award, CheckCircle, Play, ArrowLeft, Calendar } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Program data defined in code
const PROGRAMS_DATA = {
  "strength-training": {
    id: 1,
    title: "Strength Training Mastery",
    subtitle: "Build Muscle, Increase Power, Transform Your Physique",
    description:
      "Our comprehensive strength training program is designed to help you build lean muscle mass, increase functional strength, and transform your physique. Whether you're a beginner or advanced lifter, our expert coaches will guide you through progressive overload techniques and proper form to maximize your results.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.svg?height=300&width=500",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    price: "$199",
    originalPrice: "$299",
    rating: 4.9,
    students: 1250,
    category: "Strength",
    coach: "Alex Thompson",
    features: [
      "Personalized workout plans",
      "Progressive overload tracking",
      "Nutrition guidance",
      "Form correction videos",
      "24/7 coach support",
      "Weekly progress assessments",
      "Equipment alternatives",
      "Recovery protocols",
    ],
    benefits: [
      "Increase muscle mass by 15-25%",
      "Boost metabolism for fat burning",
      "Improve bone density",
      "Enhance functional strength",
      "Better posture and stability",
      "Increased confidence",
    ],
    curriculum: [
      {
        week: "Weeks 1-3",
        title: "Foundation Building",
        description: "Learn proper form and establish movement patterns",
        workouts: ["Upper Body Basics", "Lower Body Fundamentals", "Core Stability", "Mobility Work"],
      },
      {
        week: "Weeks 4-6",
        title: "Strength Development",
        description: "Increase intensity and introduce compound movements",
        workouts: ["Compound Lifts", "Accessory Work", "Power Development", "Recovery Sessions"],
      },
      {
        week: "Weeks 7-9",
        title: "Progressive Overload",
        description: "Advanced techniques and heavier loads",
        workouts: ["Heavy Lifting", "Volume Training", "Technique Refinement", "Plateau Breaking"],
      },
      {
        week: "Weeks 10-12",
        title: "Peak Performance",
        description: "Maximize strength gains and test limits",
        workouts: ["Max Effort Training", "Competition Prep", "Deload Week", "Assessment & Planning"],
      },
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        image: "/placeholder.svg?height=60&width=60",
        text: "I gained 15 lbs of muscle and feel stronger than ever. The progressive approach really works!",
        result: "15 lbs muscle gain",
      },
      {
        name: "Mike Rodriguez",
        image: "/placeholder.svg?height=60&width=60",
        text: "My deadlift went from 135 to 315 lbs in 12 weeks. Amazing program structure!",
        result: "180 lb strength increase",
      },
    ],
  },
  "hiit-cardio": {
    id: 2,
    title: "HIIT Cardio Blast",
    subtitle: "Burn Fat, Boost Metabolism, Improve Cardiovascular Health",
    description:
      "High-intensity interval training designed to maximize fat burn and improve cardiovascular fitness in minimal time. Our HIIT programs combine explosive movements with strategic rest periods to boost your metabolism for hours after your workout.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.svg?height=300&width=500",
    duration: "8 weeks",
    level: "Intermediate",
    price: "$149",
    originalPrice: "$199",
    rating: 4.8,
    students: 890,
    category: "Cardio",
    coach: "Jessica Martinez",
    features: [
      "High-intensity workouts",
      "Heart rate zone training",
      "Metabolic conditioning",
      "Equipment-free options",
      "Progress tracking",
      "Nutrition timing guide",
      "Recovery protocols",
      "Group challenges",
    ],
    benefits: [
      "Burn up to 400 calories per session",
      "Boost metabolism for 24+ hours",
      "Improve VO2 max by 15%",
      "Reduce body fat percentage",
      "Increase energy levels",
      "Better sleep quality",
    ],
    curriculum: [
      {
        week: "Weeks 1-2",
        title: "HIIT Foundations",
        description: "Introduction to interval training principles",
        workouts: ["Basic Intervals", "Bodyweight Circuits", "Active Recovery", "Heart Rate Training"],
      },
      {
        week: "Weeks 3-4",
        title: "Intensity Boost",
        description: "Increase workout intensity and complexity",
        workouts: ["Tabata Protocols", "Pyramid Training", "Circuit Challenges", "Plyometric Power"],
      },
      {
        week: "Weeks 5-6",
        title: "Advanced Conditioning",
        description: "Complex movements and longer intervals",
        workouts: ["EMOM Training", "Ladder Workouts", "Metabolic Finishers", "Sport-Specific Drills"],
      },
      {
        week: "Weeks 7-8",
        title: "Peak Performance",
        description: "Maximum intensity and endurance challenges",
        workouts: ["Competition Prep", "Max Effort Intervals", "Endurance Tests", "Recovery & Assessment"],
      },
    ],
    testimonials: [
      {
        name: "Emily Chen",
        image: "/placeholder.svg?height=60&width=60",
        text: "Lost 18 lbs in 8 weeks and my endurance improved dramatically. Love the variety!",
        result: "18 lbs weight loss",
      },
      {
        name: "David Park",
        image: "/placeholder.svg?height=60&width=60",
        text: "The workouts are challenging but fun. I actually look forward to exercising now!",
        result: "Improved fitness by 40%",
      },
    ],
  },
  "yoga-flexibility": {
    id: 3,
    title: "Yoga & Flexibility Mastery",
    subtitle: "Improve Flexibility, Balance, and Mental Well-being",
    description:
      "A comprehensive yoga program that combines traditional poses with modern flexibility techniques. Perfect for reducing stress, improving mobility, and creating a balanced mind-body connection.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.svg?height=300&width=500",
    duration: "10 weeks",
    level: "All Levels",
    price: "$129",
    originalPrice: "$179",
    rating: 4.9,
    students: 650,
    category: "Wellness",
    coach: "David Kim",
    features: [
      "Guided meditation sessions",
      "Flexibility assessments",
      "Stress relief techniques",
      "Online live classes",
      "Pose modification guides",
      "Breathing exercises",
      "Mindfulness training",
      "Progress tracking",
    ],
    benefits: [
      "Increase flexibility by 50%",
      "Reduce stress and anxiety",
      "Improve sleep quality",
      "Better posture and alignment",
      "Enhanced mental clarity",
      "Reduced muscle tension",
    ],
    curriculum: [
      {
        week: "Weeks 1-2",
        title: "Yoga Foundations",
        description: "Basic poses and breathing techniques",
        workouts: ["Sun Salutations", "Basic Poses", "Breathing Basics", "Relaxation Techniques"],
      },
      {
        week: "Weeks 3-4",
        title: "Flexibility Focus",
        description: "Target major muscle groups for flexibility",
        workouts: ["Hip Openers", "Spinal Mobility", "Shoulder Release", "Leg Stretches"],
      },
      {
        week: "Weeks 5-7",
        title: "Advanced Poses",
        description: "Challenge poses and deeper stretches",
        workouts: ["Arm Balances", "Backbends", "Inversions", "Deep Stretches"],
      },
      {
        week: "Weeks 8-10",
        title: "Integration & Flow",
        description: "Combine all elements into flowing sequences",
        workouts: ["Vinyasa Flows", "Power Yoga", "Restorative Practice", "Meditation Mastery"],
      },
    ],
    testimonials: [
      {
        name: "Lisa Thompson",
        image: "/placeholder.svg?height=60&width=60",
        text: "My flexibility improved dramatically and I feel so much more relaxed. Life-changing!",
        result: "50% flexibility increase",
      },
      {
        name: "James Wilson",
        image: "/placeholder.svg?height=60&width=60",
        text: "As a desk worker, this program saved my back and posture. Highly recommend!",
        result: "Eliminated back pain",
      },
    ],
  },
  "weight-loss": {
    id: 4,
    title: "Weight Loss Transformation",
    subtitle: "Sustainable Weight Loss Through Science-Based Methods",
    description:
      "A comprehensive 16-week program combining cardio, strength training, and nutrition coaching for sustainable weight loss. Our holistic approach ensures you lose fat while maintaining muscle mass.",
    image: "/placeholder.svg?height=400&width=600",
    videoUrl: "/placeholder.svg?height=300&width=500",
    duration: "16 weeks",
    level: "All Levels",
    price: "$299",
    originalPrice: "$399",
    rating: 4.9,
    students: 2100,
    category: "Weight Loss",
    coach: "Jessica Martinez",
    features: [
      "Personalized meal plans",
      "Weekly check-ins",
      "Body composition analysis",
      "Lifestyle coaching",
      "Supplement guidance",
      "Habit formation",
      "Plateau prevention",
      "Maintenance planning",
    ],
    benefits: [
      "Lose 1-2 lbs per week safely",
      "Maintain muscle mass",
      "Boost metabolism",
      "Develop healthy habits",
      "Improve energy levels",
      "Better relationship with food",
    ],
    curriculum: [
      {
        week: "Weeks 1-4",
        title: "Foundation Phase",
        description: "Establish healthy habits and baseline fitness",
        workouts: ["Cardio Base Building", "Strength Foundations", "Nutrition Education", "Habit Formation"],
      },
      {
        week: "Weeks 5-8",
        title: "Acceleration Phase",
        description: "Increase intensity and refine nutrition",
        workouts: ["HIIT Integration", "Strength Progression", "Meal Prep Mastery", "Mindset Work"],
      },
      {
        week: "Weeks 9-12",
        title: "Transformation Phase",
        description: "Maximum fat loss while preserving muscle",
        workouts: ["Advanced Training", "Metabolic Conditioning", "Fine-tune Nutrition", "Plateau Breaking"],
      },
      {
        week: "Weeks 13-16",
        title: "Maintenance Phase",
        description: "Transition to sustainable long-term habits",
        workouts: ["Maintenance Training", "Flexible Nutrition", "Lifestyle Integration", "Future Planning"],
      },
    ],
    testimonials: [
      {
        name: "Maria Garcia",
        image: "/placeholder.svg?height=60&width=60",
        text: "Lost 35 lbs and kept it off for over a year. The habits I learned changed my life!",
        result: "35 lbs weight loss",
      },
      {
        name: "Robert Kim",
        image: "/placeholder.svg?height=60&width=60",
        text: "Finally found a sustainable approach. Lost 28 lbs without feeling deprived!",
        result: "28 lbs weight loss",
      },
    ],
  },
}

export default function ProgramDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [activeTab, setActiveTab] = useState("overview")

  const program = PROGRAMS_DATA[slug as keyof typeof PROGRAMS_DATA]

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Programs</span>
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FitCoach
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30">{program.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{program.title}</h1>
                <p className="text-xl opacity-90">{program.subtitle}</p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{program.rating}</span>
                  <span className="opacity-75">({program.students} students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>{program.level}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold">{program.price}</div>
                <div className="text-lg opacity-75 line-through">{program.originalPrice}</div>
                <Badge className="bg-green-500 text-white">Save 33%</Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Users className="mr-2 h-5 w-5" />
                  Enroll Now
                </Button>
                <Link href="/schedule">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Watch Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="testimonials">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Program Description</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{program.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3 text-gray-900 dark:text-white">What's Included:</h4>
                        <ul className="space-y-2">
                          {program.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold mb-3 text-gray-900 dark:text-white">Program Details:</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Duration:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{program.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Level:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{program.level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Coach:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{program.coach}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">Students:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{program.students}+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 sticky top-24 dark:bg-slate-800 dark:border-slate-700">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{program.price}</div>
                      <div className="text-gray-500 line-through mb-4">{program.originalPrice}</div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mb-4">
                        Enroll Now
                      </Button>
                      <p className="text-sm text-gray-600 dark:text-gray-300">30-day money-back guarantee</p>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">⏱️ Duration:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{program.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">📱 Access:</span>
                        <span className="font-medium text-gray-900 dark:text-white">Lifetime</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">🎓 Certificate:</span>
                        <span className="font-medium text-gray-900 dark:text-white">Yes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300">💬 Support:</span>
                        <span className="font-medium text-gray-900 dark:text-white">24/7</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div className="grid gap-6">
                {program.curriculum.map((phase, index) => (
                  <Card key={index} className="p-6 dark:bg-slate-800 dark:border-slate-700">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{phase.title}</h3>
                          <Badge variant="outline">{phase.week}</Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{phase.description}</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {phase.workouts.map((workout, workoutIndex) => (
                            <div
                              key={workoutIndex}
                              className="bg-gray-50 rounded-lg p-3 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              {workout}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Key Benefits</h3>
                  <ul className="space-y-4">
                    {program.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose This Program?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Expert Coaching</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          Certified professionals guide you
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Proven Results</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {program.students}+ successful students
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Flexible Schedule</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Train on your own time</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {program.testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-6 dark:bg-slate-800 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.result}</div>
                        <div className="flex space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</blockquote>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join {program.students}+ students who have already transformed their lives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Enroll Now - {program.price}
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Have Questions? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
