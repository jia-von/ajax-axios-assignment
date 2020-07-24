/**
 * AJAX Examples
 */

// Retrieving an external resource (live JSON data.)
fetch( "https://cat-fact.herokuapp.com/facts" ) // Sends the request...
  // We can use .then() to parse the response.
  .then( response => {
    if ( response.status >= 200 && response.status <= 299 )
    { // 200 range status/response codes are SUCCESSES!
      return response.json(); // Convert to JSON, and send to next step (.then())
    }
    else
    { // If it is another range, we are unsuccessful...
      throw Error( response.statusText ); // Display a formal error message reporting the concern.
    }
  } )
  // Data has been formatted, let's have a look inside...
  .then( data => {
    // Output data to console for testing.
    console.log( data );
    // Prepare for HTML list.
    const catUL = document.createElement( "UL" );
    // Let's grab those people!
    const catFacts = data.all; // This is an array of people...
    // Let's loop through them!
    for ( const catFactsList of catFacts )
    { // Prepare an LI for this person.
      const catLI = document.createElement( "LI" );
      // Add some text content (using template literal to inject our values.)
      catLI.textContent = `A fact for a ${catFactsList.type}: ${catFactsList.text} voted by ${catFactsList.upvotes} feline(s)`;
      // Add this <li> to our <ul>.
      catUL.appendChild( catLI );
    }
    // Add our <ul> to the <body> so we can see it in the browser!
    document.body.appendChild( catUL );
  } );