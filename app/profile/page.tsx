import Navigation from '@/components/navigation'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Profile() {
  // Mock user data
  const user = {
    name: 'Jane Doe',
    username: '@janedoe',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'Content creator | Fitness enthusiast | Dog lover',
    followers: 10500,
    following: 350,
    posts: 128,
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navigation />
      <main className="flex-1 p-4">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.username}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">{user.bio}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{user.followers.toLocaleString()} followers</span>
              <span>{user.following.toLocaleString()} following</span>
              <span>{user.posts} posts</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Subscribe</Button>
          </CardFooter>
        </Card>

        <Tabs defaultValue="posts" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            {/* Add posts content here */}
            <p className="text-center text-gray-500 my-4">No posts yet</p>
          </TabsContent>
          <TabsContent value="media">
            {/* Add media content here */}
            <p className="text-center text-gray-500 my-4">No media yet</p>
          </TabsContent>
          <TabsContent value="likes">
            {/* Add likes content here */}
            <p className="text-center text-gray-500 my-4">No likes yet</p>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

