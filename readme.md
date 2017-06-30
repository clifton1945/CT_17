/**
 * 170703  me OUTLINING Proj
 */
Go Down and ORGANIZE a world that  
    has a documentDiv, chapterDiv, verseSpans 
    has a readClassTable 
        of three keys: am, noon, pm
        with values: {siz, csd}
    
Go Down and[ in NounSpeak ]
    select the readClass_Noon
        use it to update each readClassTable.siz
    
    Then for-each verseSpan
        transform the readClassTable.siz into a readClassNdx
        use readClassNdx to weight a readClassCsd to be readClassTable.csd
        apply this csd to MUTATE the verseSpan.style.
        supply a verse 
            e.g. map(MUTATE_Verse)(verseSpanCollection)
        
// now in [ in VerbSpeak ], you will need these Fns
    
     Fn: 
        SERVE_aNoonSpan
        SERVE_theReadClassTable
        SERVE_aVerseSpan
        SERVE_aReadClassNdx
        SERVE_aReadClassCsd
        MUTATE_Verse: 
            sig:    Fn(verseSpan) = verseSpan
            usage:  iterator(Fn)(aSpan_Provider)
            design: pipe(serve_aCsd)
            test:   