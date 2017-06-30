/**
 * 170629  me thinking through [ in VerbSpeak ]
 */
Go Down and ORGANIZE a world that  [ in NounSpeak ]
    has a html.div.Chapter; 
    has a collection of html.span.Verses.
    has a tableClassRead, of three keys: am, noon, pm
        and values: {siz, csd}
    
Go Down and
    MUTATE each spanVerse
        in the divChapter
    using an UPDATED styleCsd:
    where the styleCsd 
    REFLECTS
    the spanVerse's relative index in its ClassRead of size N. 
    
// now in verbSpeak    

    PLAN to iterate a final main FinalFn that is INVOKED with some SpanVerse and RETURNS a mutatedSpanVerse 
        Thus a mutatedSpanStyle = `FinalFn`( aSpanVerse ) -> aSpanVerse
        signature: `FinalFn`( aSpanVerse ) -> aSpanVerse
        
        `FinalFn` can be named: "SpanVerse_MUTATOR" [ passive format: result <- Verb <- param ]
        OR
        `FinalFn` can be named: "MUTATE_spanStyle" [ active format: parm -> Verb -> result ]  
        
    This final MUTATE_SpanVers || SpanVers_MUTATOR function NEEDS an already updatedStyleCsd ready to MUTATE: 
        i.e. set the span.style
    
SO suppose there is a function `Fn1`:arity:2 _MUTATOR [in active] = ( csd, span) => span 
    Fn1 wants to partial an already updatedStyleCsd AND then return a FinalFn:MUTATE_spanStyle.
    signature: `Fn1`( csd ) -> 'FinalFn'

    Thus, `FinalFn`:SpanVerse_MUTATOR = `Fn1`:_MUTATOR(already updatedStyleCsd)
    Thus, `FinalFn` = pipe(_MUTATOR)(already updatedStyleCsd)
    Thus, `FinalFn` = pipe(`Fn1`)(already updatedStyleCsd)
    AND, a mutatedSpanStyle = `FinalFn`(StyleCsd) IS STILL VALID: MUTATE_SpanVers is ready to be applied to each spanVerse.
    
    NOW if there was a `Fn2` of signature: Fn2(someValu)  -> updatedStyleCsd
    It could be named stylCsd_TRANSFORMOR w/ @SIGN: Fn2( csd  -> csd || newCsd = Fn2:(csd)
    THEN `FinalFn` could now be compose(`Fn1`, Fn2`) AND mutatedSpanStyle still = `FinalFn`(span)
    
    
// ***************  WIP bits and pieces 
    
Do the following
    Use a KEYEVENTHANDLER   to SELECT a span_NoonVerse to be the ClassRead:Noon  
    OR   
    Use a SPAN_SELECTOR     to SELECT a span_NoonVerse to be the ClassRead:Noon 
    
    Use the span_NoonVerse  to RESET the tableClassRead.Sizes; // e.g. {am:{siz:2, csd:{}}
    
    BUILD a Fn1: spanVerseNdx_CONVERTOR:: ( numClassReadNum  <- numSpanVerseNdx )
        Fn1 follows passive naming format:  result_usesVerbed when invoked with (a given)  
        Fn1 @signature naming format: result  <- invoked with param 
        
        DEFINE A Fn _CONVERT = 
        Use the dfltClassReadCsd to BUILD a Fn1: spanVerseNdx_CONVERTOR:: numClassReadNum  <- numSpanVerseNdx;
    
    use the tableClassRead  to PRESENT a dfltClassReadCsd
    
    
     
    
    Use the tableClassRead.Sizes in Fn1: to RETURN a 
    Use the span_NoonVerse  to RESET the tableClassRead.weight.  verse relative position:{ndx, siz} in their ClassRead 
    Use the span_NoonVerse  to RESET the tableClassRead.csd
                

    USE an Iterator Function to    
        Use the ClassRead.Sizes to TRANSFORM a spanVerse.Ndx INTO a ClassRead.Ndx
        Use the ClassRead.Ndx to WEIGHT a PropertyStyle.Attribute
            where Weight is a Value for a PropertyStyle.Attribute Key ]
        Use the ClassRead.Weight to TRANSFORM the PropertyStyle.Attribute Values of the tableStylCsd

Do the following                    
    Use the tableStylCsd AND the aSpanVerse to MUTATE the spanVerse
    
    
    
       
    
     