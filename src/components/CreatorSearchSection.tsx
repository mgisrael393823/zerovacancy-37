
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
      className="w-full max-w-full mx-auto rounded-xl shadow-lg h-full overflow-hidden px-4 pt-4 pb-4 font-sans bg-white"
    >
      <div className="flex gap-4 h-full">
        <div className="w-[220px] border-r border-border/20 pr-4 h-full overflow-y-auto">
          <div className="relative mb-3">
            <Input
              placeholder="Search creators..."
              className="pl-9 bg-secondary/50 ring-accent/20 focus:ring-2 rounded-lg border-[#7358F9]"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="font-heading text-xs mb-2 text-primary font-medium">Content Type</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Checkbox id="photo" className="h-3 w-3" />
                  <Label htmlFor="photo" className="text-xs text-muted-foreground">
                    Photography
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="video" className="h-3 w-3" />
                  <Label htmlFor="video" className="text-xs text-muted-foreground">
                    Videography
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xs mb-2 text-primary font-medium">Distance</h4>
              <div className="grid grid-cols-2 gap-1">
                <Button size="sm" variant="outline" className="text-[10px] rounded-lg h-6 border-[#7358F9]">
                  5 mi
                </Button>
                <Button size="sm" variant="outline" className="text-[10px] rounded-lg h-6 border-[#7358f9]">
                  10 mi
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xs mb-2 text-primary font-medium">
                Price Range
              </h4>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Checkbox id="budget" className="h-3 w-3" />
                  <Label htmlFor="budget" className="text-xs text-muted-foreground">
                    $0 - $250
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="mid" className="h-3 w-3" />
                  <Label htmlFor="mid" className="text-xs text-muted-foreground">
                    $250 - $500
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs text-[#7358f9] font-semibold">
              24 creators near Los Angeles, CA
            </p>
            <div className="flex items-center gap-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[120px] h-8 rounded-lg text-xs">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
              <Button size="icon" variant="outline" className="rounded-lg h-8 w-8">
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 overflow-y-auto flex-1 gap-3">
            <Card className="bg-secondary/50 shadow-md hover:shadow-lg transition-shadow rounded-lg border-[#7358f9]">
              <CardContent className="p-3">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-muted rounded-lg flex-shrink-0 border border-[#7358F9]" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Michael Torres
                      </h3>
                      <Badge variant="outline" className="ml-1 text-[8px] px-1 py-0 h-4">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-[9px] text-muted-foreground">Los Angeles, CA • 2.1 miles</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[9px] font-medium text-muted-foreground">
                        4.9 (127)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent/20 text-primary rounded-md text-[9px] px-1 py-0">
                      Photography
                    </Badge>
                    <span className="text-[10px] font-medium text-muted-foreground">From $299</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-700 rounded-md text-[9px] px-1 py-0"
                  >
                    Available
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-md text-[10px] py-1 h-7 border-[#7358F9] text-[#7358F9]"
                  >
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 rounded-md text-[10px] py-1 h-7">
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 shadow-md hover:shadow-lg transition-shadow rounded-lg border-[#7358f9]">
              <CardContent className="p-3">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-muted rounded-lg flex-shrink-0 border border-[#7358F9]" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Victoria Chen
                      </h3>
                      <Badge variant="outline" className="ml-1 text-[8px] px-1 py-0 h-4">
                        Verified
                      </Badge>
                    </div>
                    <p className="text-[9px] text-muted-foreground">Beverly Hills, CA • 5.3 miles</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[9px] font-medium text-muted-foreground">
                        5.0 (56)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-accent/20 text-primary rounded-md text-[9px] px-1 py-0">
                      Interior
                    </Badge>
                    <span className="text-[10px] font-medium text-muted-foreground">From $399</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-700 rounded-md text-[9px] px-1 py-0"
                  >
                    Apr 15-20
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 rounded-md text-[10px] py-1 h-7 border-[#7358F9] text-[#7358F9]"
                  >
                    View Profile
                  </Button>
                  <Button size="sm" className="flex-1 rounded-md text-[10px] py-1 h-7">
                    Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
