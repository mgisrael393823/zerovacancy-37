
export function CreatorSearchPreview() {
  return (
    <div 
      className="w-full max-w-full mx-auto rounded-xl shadow-lg h-full overflow-hidden px-4 pt-4 pb-4 font-sans bg-white pointer-events-none select-none"
    >
      <div className="flex gap-4 h-full">
        <div className="w-[220px] border-r border-border/20 pr-4 h-full">
          <div className="relative mb-3">
            <div 
              className="pl-9 bg-secondary/50 rounded-lg border-[#7358F9] border h-9 w-full opacity-50"
            >
              <div className="absolute left-3 top-3 h-4 w-4 text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <h4 className="font-heading text-xs mb-2 text-primary font-medium">Content Type</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-3 h-3 border rounded bg-gray-200" />
                  <span className="text-xs text-muted-foreground">Photography</span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-3 h-3 border rounded bg-gray-200" />
                  <span className="text-xs text-muted-foreground">Videography</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xs mb-2 text-primary font-medium">Distance</h4>
              <div className="grid grid-cols-2 gap-1">
                <div className="text-[10px] rounded-lg h-6 border border-[#7358F9] text-center pt-1 opacity-50">5 mi</div>
                <div className="text-[10px] rounded-lg h-6 border border-[#7358F9] text-center pt-1 opacity-50">10 mi</div>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xs mb-2 text-primary font-medium">
                Price Range
              </h4>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-3 h-3 border rounded bg-gray-200" />
                  <span className="text-xs text-muted-foreground">$0 - $250</span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-3 h-3 border rounded bg-gray-200" />
                  <span className="text-xs text-muted-foreground">$250 - $500</span>
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
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-[120px] h-8 rounded-lg border text-xs text-center pt-1">Sort by</div>
              <div className="h-8 w-8 rounded-lg border flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/50 shadow-md rounded-lg border-[#7358f9] border">
              <div className="p-3">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-muted rounded-lg flex-shrink-0 border border-[#7358F9]" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Michael Torres
                      </h3>
                      <div className="ml-1 text-[8px] px-1 py-0 h-4 border rounded opacity-50">
                        Verified
                      </div>
                    </div>
                    <p className="text-[9px] text-muted-foreground">Los Angeles, CA • 2.1 miles</p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.057-1.96 1.422L12 18.354 7.373 21.18c-.996.635-2.231-.286-1.96-1.422l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[9px] font-medium text-muted-foreground">
                        4.9 (127)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent/20 text-primary rounded-md text-[9px] px-1 py-0 border">
                      Photography
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground">From $299</span>
                  </div>
                  <div className="bg-green-500/20 text-green-700 rounded-md text-[9px] px-1 py-0 border">
                    Available
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 rounded-md text-[10px] py-1 h-7 border border-[#7358F9] text-[#7358F9] text-center pt-2 opacity-50">
                    View Profile
                  </div>
                  <div className="flex-1 rounded-md text-[10px] py-1 h-7 bg-[#7358F9] text-white text-center pt-2 opacity-50">
                    Invite
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 shadow-md rounded-lg border-[#7358f9] border">
              <div className="p-3">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-muted rounded-lg flex-shrink-0 border border-[#7358F9]" />
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-heading text-xs font-semibold text-primary">
                        Victoria Chen
                      </h3>
                      <div className="ml-1 text-[8px] px-1 py-0 h-4 border rounded opacity-50">
                        Verified
                      </div>
                    </div>
                    <p className="text-[9px] text-muted-foreground">Beverly Hills, CA • 5.3 miles</p>
                    <div className="flex items-center gap-1 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 text-yellow-500">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.057-1.96 1.422L12 18.354 7.373 21.18c-.996.635-2.231-.286-1.96-1.422l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[9px] font-medium text-muted-foreground">
                        5.0 (56)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent/20 text-primary rounded-md text-[9px] px-1 py-0 border">
                      Interior
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground">From $399</span>
                  </div>
                  <div className="bg-blue-500/20 text-blue-700 rounded-md text-[9px] px-1 py-0 border">
                    Apr 15-20
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 rounded-md text-[10px] py-1 h-7 border border-[#7358F9] text-[#7358F9] text-center pt-2 opacity-50">
                    View Profile
                  </div>
                  <div className="flex-1 rounded-md text-[10px] py-1 h-7 bg-[#7358F9] text-white text-center pt-2 opacity-50">
                    Invite
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
