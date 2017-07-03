/**
 *  me OUTLINING Proj
  170703: 1040
    PAUSED AT RET_new_NoonSpan
        A. USE existing keyAction
        B. see if querySelect and a RET_newNoonSpanIndex function
        C. look at 
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
        RET_new_NoonSpan
            RET_new_NoonSpan(keyPress)   
            RET_new_NoonSpanIndex
            
        RET_new_ReadClassTable
            RET_new_ReadClassTable_SIZES( NoonSpanIndex )

        RET_new_VerseSpan
            RET_new_VerseSpan_INDEX
            RET_new_ReadClassTable_KEY( INDEX )
            RET_new_VerseSpan_WEIGHT( INDEX ) 
            RET_new_ReadClassTable_CSD( WEIGHT )
        MUTATE_Verse: 
            sig:    Fn(verseSpan) = verseSpan
            usage:  iterator(Fn)(aSpan_Provider)
            design: pipe(RET_new_Csd)
            test:   