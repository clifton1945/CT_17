/**
 *  me OUTLINING Proj
  170703:
    PAUSED AT RET_new_NoonSpan
        A. USE existing keyAction || mouseEvent
            @1446 reading  https://www.kirupa.com/html5/handling_events_for_many_elements.htm
        B. see if querySelect and a RET_newNoonSpanIndex function
        C. look at R.indexOf as the answer if convert either ELEMList OR Collection into array **** looks like best.
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
            SELECT_All  -> f:a2 RETURNS a htmlELEM GIVEN a querySTR AND a Document
            querySERVER -> f:a1 RETURNS a htmlELEM GIVEN a querySTR TO an EMBEDDED Document
                = SELECT_All(Document)
            ChptVersesNL -> RETURNS a ELEMLIST 
                = querySERVER( chptVersSTR )
            noonVerseSERVER -> f: RETURNS a Span GIVEN a MouseClick
                this is the callback func of and EventHandler applies to the div.chpt Element
                it is currently named: doSomething
            indexSERVER -> f:a1 RETURNS a ndxNum GIVEN a verseSPAN TO an EMBEDDED verseELEMLIST
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