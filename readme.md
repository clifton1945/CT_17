/**
 *  me OUTLINING Proj  170712
 for 170713 _ REFACT the names and form of main.js preparatory to
 
     SELECT the noonClssVerse
             either by mouseEvent, or keyEvent, or initialValue 
         EVOLVE its styleCsd Properties to be the noonStyle
             each styleCsd has a default noonStyle Attributes
             FOR-EACH AttrKey UPDATE its AttrValu as a f( 
                 its distance from noon) 
         MUTATE the verse with the noonStyleCsd. 
 */
 
 
Go Down and ORGANIZE a world that  
    has a documentDiv, chapterDiv, verseSpans 
    has a readClassTable 
        of three keys: am, noon, pm
        with values: {siz, csd}
    
Go Down and[ in NounSpeak ]
    SELECT the noonClssVerse
            either by mouseEvent, or keyEvent, or initialValue 
        EVOLVE its styleCsd Properties to be the noonStyle
            each styleCsd has a default noonStyle Attributes
            FOR-EACH AttrKey UPDATE its AttrValu as a f( 
                its distance from noon) 
        MUTATE the verse with the noonStyleCsd.
    
    Then 
    FOR-EACH verseSpan after the noonVerse
        EVOLVE its styleCsd Properties to be a pmReadClassStyle
            each styleCsd has default style Attributes
            FOR-EACH AttrKey UPDATE its AttrValu as a f(
                its distance from noon) 
        MUTATE the verse with this pmStylCsd.
    Then 
    FOR-EACH verseSpan before the noonVerse
        EVOLVE its styleCsd Properties to be a amReadClassStyle
            each styleCsd has default style Attributes
            FOR-EACH AttrKey UPDATE its AttrValu as a f(
                its distance from noon)             
        MUTATE the verse with this pmStylCsd.