/**
 *  me THINKING Proj  170714
 
 
 
Go Down and ORGANIZE a world that  
    has a documentDiv, chapterDiv, verseSpans 
    has a readClassTable 
        of three keys: am, noon, pm
        with values: {siz, csd}
    
Go Down and[ in VerbSpeak ]
    SELECT the noonClssVerse
         either by mouseEvent, or keyEvent, or initialValue 
    SET its styleCsd to be noonStylCsd default.
>>> note here: I've toyed with usingCSS and div.readClasses.
    That allows for setting say background colors by class
    BUT the two 'am' & 'pm' verses EACH must be weighted. 
    So JUST USE inline styling for everything and not confuse myself with two ways.          
    
    MUTATE the noonVerse with the noonStyleCsd. 

    
    Then 
    FOR-EACH verseSpan after the noonVerse
        EVOLVE its styleCsd Properties to be a pm ReadClassStyle
            each styleCsd has default style Attributes
            FOR-EACH AttrKey UPDATE its AttrValu as a f(
                its distance from noon) 
        MUTATE the verse with this pmStylCsd.
    Then 
    FOR-EACH verseSpan before the noonVerse
        EVOLVE its styleCsd Properties to be a am ReadClassStyle
            each styleCsd has default style Attributes
            FOR-EACH AttrKey UPDATE its AttrValu as a f(
                its distance from noon)             
        MUTATE the verse with this pmStylCsd.