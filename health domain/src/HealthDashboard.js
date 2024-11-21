import React, { useState } from 'react'
import { Button } from "./components/ui/Button"
import { Input } from "./components/ui/Input"
import { Label } from "./components/ui/Label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/Card"
import { Progress } from "./components/ui/Progress"
import { Activity, FileUp, Heart, User } from 'lucide-react'

function HealthDashboard() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)
      if (currentProgress >= 100) {
        clearInterval(interval)

        setName('')
        setAge('')
        setFile(null)
        setTimeout(() => setProgress(0), 1000)
      }
    }, 200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-blue-600">Health Dashboard</CardTitle>
          <CardDescription className="text-center text-gray-600">Monitor and manage your health information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">
                  <User className="inline-block mr-2" size={20} />
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="text-lg p-6"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age" className="text-lg">
                  <Activity className="inline-block mr-2" size={20} />
                  Age
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your age"
                  required
                  min="0"
                  max="120"
                  className="text-lg p-6"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="file" className="text-lg">
                <FileUp className="inline-block mr-2" size={20} />
                Upload Health Records
              </Label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="text-lg"
              />
            </div>
            <Button type="submit" className="w-full text-lg p-6">
              <Heart className="mr-2" /> Submit Health Information
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          {progress > 0 && (
            <div className="w-full space-y-2">
              <Progress value={progress} className="w-full" />
              <p className="text-center text-sm text-gray-600">Submitting your information...</p>
            </div>
          )}
        </CardFooter>
      </Card>
      <Card className="w-full max-w-4xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-600">Health Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-blue-100 rounded-lg">
              <User className="mx-auto mb-2" size={32} />
              <h3 className="font-semibold">Name</h3>
              <p>{name || 'Not provided'}</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg">
              <Activity className="mx-auto mb-2" size={32} />
              <h3 className="font-semibold">Age</h3>
              <p>{age || 'Not provided'}</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg">
              <FileUp className="mx-auto mb-2" size={32} />
              <h3 className="font-semibold">Uploaded File</h3>
              <p>{file ? file.name : 'No file uploaded'}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HealthDashboard