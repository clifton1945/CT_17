/**
 *  me THINKING Proj  170717
 
Go Down and ORGANIZE a world that  
    has a documentDiv, chapterDiv, verseSpans 
    has a readClassTable 
        of three keys: am, noon, pm
        with values
    
Go Down and[ in VerbSpeak ]
    SELECT a noonVerse, a span, from the Chapter Verses List
         either by mouseEvent, or keyEvent, or initialValue 
    SET three ReadSpace Lists using the noonVerse.
    
    Then 
    FOR-EACH readList 
        FOR-EACH verseSpan FROM the readList
            EVOLVE its styleCsd Properties to its readClassCsd
                each styleCsd has default style Attributes
                FOR-EACH AttrKey UPDATE its AttrValu as a f(
                    its distance from noon) 
        MUTATE the verseSpan with its readStylCsd.
