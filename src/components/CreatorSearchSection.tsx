
import { Search, LayoutGrid, Save, Star } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function CreatorSearchSection() {
  return (
    <div
      style={{
        border: "1px solid",
        background: "linear-gradient(to bottom, #F1F0FB, #FFFFFF)",
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(to right, #1A1F2C, #E5DEFF)",
      }}
      className="w-[95%] max-w-[1100px] mx-auto rounded-xl shadow-lg h-[450px] overflow-hidden px-4 pt-4 pb-[1px] font-sans"
    >
      <div className="flex gap-6 h-full">
        <div className="w-[260px] border-r border-border/20 pr-4 h-full overflow-y-auto">
          <div className="flex items-center gap-3 mb-4 border-[#7358f9]">
            <h3 className="font-heading text-lg text-primary font-bold">Creator Search</h3>
          </div>
          <div className="relative mb-4">
            <Input
              placeholder="Search by skill or location..."
              className="pl-9 bg-secondary/50 ring-accent/20 focus:ring-2 rounded-lg border-[#7358F9]"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-heading text-sm mb-2 text-primary font-medium">Content Type</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="photo" />
                  <Label htmlFor="photo" className="text-sm text-muted-foreground">
                    Photography
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="video" />
                  <Label htmlFor="video" className="text-sm text-muted-foreground">
                    Videography
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="aerial" />
                  <Label htmlFor="aerial" className="text-sm text-muted-foreground">
                    Aerial
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-2 text-primary font-medium">Distance</h4>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" variant="outline" className="text-xs rounded-lg border-[#7358F9]">
                  5 mi
                </Button>
                <Button size="sm" variant="outline" className="text-xs rounded-lg border-[#7358f9]">
                  10 mi
                </Button>
                <Button size="sm" variant="outline" className="text-xs rounded-lg border-[#7358F9]">
                  25 mi
                </Button>
                <Button size="sm" variant="outline" className="text-xs rounded-lg border-[#7358f9]">
                  50 mi
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-2 text-primary font-medium">
                Experience Level
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <Button size="sm" variant="outline" className="text-xs rounded-lg border-[#7358F9]">
                  Beginner
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs rounded-lg border-[#7358F9] grid"
                >
                  Advanced
                </Button>
                <Button size="sm" variant="outline" className="text-xs rounded-lg border-[#7358F9]">
                  Expert
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-2 text-primary">Price Range</h4>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="budget" />
                  <Label htmlFor="budget" className="text-sm text-muted-foreground">
                    $0 - $250
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="mid" />
                  <Label htmlFor="mid" className="text-sm text-muted-foreground">
                    $250 - $500
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="premium" />
                  <Label htmlFor="premium" className="text-sm text-muted-foreground">
                    $500+
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-2 text-primary">Quick Filters</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-lg">
                  Available Now
                </Badge>
                <Badge variant="secondary" className="rounded-lg">
                  Highly Rated
                </Badge>
                <Badge variant="secondary" className="rounded-lg">
                  Trending
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-2 text-primary">Equipment</h4>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="drone" />
                  <Label htmlFor="drone" className="text-sm text-muted-foreground">
                    Drone
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="360" />
                  <Label htmlFor="360" className="text-sm text-muted-foreground">
                    360° Camera
                  </Label>
                </div>
              </div>
            </div>
            <div className="opacity-30">
              <h4 className="font-heading text-sm mb-1 text-primary">Location Type</h4>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-[#7358f9] font-semibold">
              Showing 24 creators near Los Angeles, CA
            </p>
            <div className="flex items-center gap-3">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[140px] rounded-lg">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
              <Button size="icon" variant="outline" className="rounded-lg">
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-lg">
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 overflow-y-auto overflow-x-hidden flex-1 h-full gap-[13px] mb-[-8px]">
            <Card className="bg-secondary/50 shadow-md hover:shadow-lg transition-shadow rounded-lg border-[#7358f9]">
              <CardContent className="p-3">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex-shrink-0 border border-[#7358F9]" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Michael Torres
                      </h3>
                      <Badge variant="outline" className="ml-1 text-[8px] px-1 py-0 h-4">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Los Angeles, CA • 2.1 miles</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-medium text-muted-foreground">
                        4.9 (127 reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 mb-3">
                  <div className="aspect-square bg-muted rounded-md border-[#7358F9] border" />
                  <div className="aspect-square bg-muted rounded-md border border-[#7358F9]" />
                  <div className="aspect-square bg-muted border border-[#7358F9] rounded-sm" />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent/20 text-primary rounded-md text-[10px] px-1 py-0">
                      Photography
                    </Badge>
                    <span className="text-xs font-medium text-muted-foreground">From $299</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-700 rounded-md text-[10px] px-1 py-0"
                  >
                    Available Now
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-md text-xs py-1 h-8 border-[#7358F9] text-[#7358F9]"
                  >
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 rounded-md text-xs py-1 h-8">
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 shadow-md hover:shadow-lg transition-shadow rounded-lg border-[#7358f9]">
              <CardContent className="p-3">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex-shrink-0 border border-[#7358F9]" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Victoria Chen
                      </h3>
                      <Badge variant="outline" className="ml-1 text-[8px] px-1 py-0 h-4">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      Beverly Hills, CA • 5.3 miles
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-medium text-muted-foreground">
                        5.0 (56 reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 mb-3">
                  <div className="aspect-square bg-muted rounded-md border border-[#7358F9]" />
                  <div className="aspect-square bg-muted rounded-md border border-[#7358F9]" />
                  <div className="aspect-square bg-muted rounded-md border border-[#7358F9]" />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent/20 text-primary rounded-md text-[10px] px-1 py-0">
                      Interior Photography
                    </Badge>
                    <span className="text-xs font-medium text-muted-foreground">From $399</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-700 rounded-md text-[10px] px-1 py-0"
                  >
                    Available Apr 15-20
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-md text-xs py-1 h-8 border-[#7358F9] text-[#7358F9]"
                  >
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 rounded-md text-xs py-1 h-8">
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 shadow-md rounded-lg border-[#7358f9]">
              <CardContent className="px-3 pt-3 pb-[8px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Skyline Drone Services
                      </h3>
                      <Badge variant="outline" className="ml-1 text-[8px] px-1 py-0 h-4">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground">Pasadena, CA • 12 miles</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-medium text-muted-foreground">
                        4.7 (84 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 shadow-md rounded-lg border-[#7358f9]">
              <CardContent className="p-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-muted rounded-lg flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Alex Johnson
                      </h3>
                      <Badge variant="outline" className="ml-1 text-[8px] px-1 py-0 h-4">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-[10px] text-muted-foreground">
                      Santa Monica, CA • 8.3 miles
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-medium text-muted-foreground">
                        4.8 (105 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-4" />
        </div>
      </div>
    </div>
  );
}
