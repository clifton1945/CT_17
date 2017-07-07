/**
 *  me OUTLINING Proj  170707
 * NOW TEST in Wallaby  - MUTATE_Elt__wallaby
    try and put it top down.
    try and do it with English and mocha first.
 * I even think I can shorten the code by having almost all of it a FUNCTIONS: minimize the nouns.   
 
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
            SELECT_All  -> f:a2 RETURNS a NODELIST GIVEN a querySTR AND a Document
            querySERVER -> f:a1 RETURNS a NODELIST GIVEN a querySTR TO an EMBEDDED Document
                = SELECT_All(Document)
            ChptVersesNODELIST -> RETURNS a ELEMLIST
            Hey what about USING R.always(NODELIST) and add it to a pipe??
                = querySERVER( chptVersSTR )
            noonVerseSERVER -> f: RETURNS a Span GIVEN a MouseClick
                this is the callback func of and EventHandler applies to the div.chpt Element
                it is currently named: doSomething
            TODO  add itermediate f like always(NODELIST0 to partial this indexSERVER
            indexSERVER -> f:a1 RETURNS a ndxNum GIVEN a verseSPAN TO an EMBEDDED ChptVersesNODELIST
            
            readClassTableSERVER
            
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