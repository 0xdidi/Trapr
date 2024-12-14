'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2 } from 'lucide-react'
import { useSupabase } from './supabase-provider'

const FeedItem = ({ post }) => (
  <Card className="mb-4">
    <CardHeader>
      <div className="flex items-center">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src={post.users.avatar_url} />
          <AvatarFallback>{post.users.username[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-sm">{post.users.username}</CardTitle>
          <CardDescription className="text-xs">{new Date(post.created_at).toLocaleString()}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p>{post.content}</p>
      {post.image_url && (
        <img src={post.image_url} alt="Post content" className="mt-2 rounded-lg" />
      )}
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant="ghost" size="sm">
        <Heart className="h-5 w-5 mr-1" />
        Like
      </Button>
      <Button variant="ghost" size="sm">
        <MessageCircle className="h-5 w-5 mr-1" />
        Comment
      </Button>
      <Button variant="ghost" size="sm">
        <Share2 className="h-5 w-5 mr-1" />
        Share
      </Button>
    </CardFooter>
  </Card>
)

const Feed = () => {
  const [activeTab, setActiveTab] = useState('following')
  const [posts, setPosts] = useState([])
  const { supabase } = useSupabase()

  useEffect(() => {
    fetchPosts()
  }, [activeTab])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*, users(username, avatar_url)')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching posts:', error)
    } else {
      setPosts(data)
    }
  }

  return (
    <Tabs defaultValue="following" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="following">Following</TabsTrigger>
        <TabsTrigger value="forYou">For You</TabsTrigger>
      </TabsList>
      <TabsContent value="following">
        {posts.map(post => (
          <FeedItem key={post.id} post={post} />
        ))}
      </TabsContent>
      <TabsContent value="forYou">
        {posts.map(post => (
          <FeedItem key={post.id} post={post} />
        ))}
      </TabsContent>
    </Tabs>
  )
}

export default Feed

