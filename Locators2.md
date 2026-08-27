The most important XPath concepts are //, @attribute, text(), contains(), starts-with(), and/or, parent, ancestor, following-sibling, preceding-sibling, and XPath indexes.

// double slash:
search anywhere in the HTML/DOM. Example://input

@attribute: 
An attribute is extra information or a property attached to an HTML element.
example: 

<input type="text" placeholder="Username" id="userName">

type, placeholder, id are attribute
"text", "Username", "userName" are attribute values.
input is the HTML element

//input[@id='username']

@ means attribute

@id means the id attribute.
@placeholder means the placeholder attribute
@type ments the type attribute

Text:
Select by exact visible text.
text() means the Text inside an HTML element.
To find the Text of an element in HTML, look at the text written between the opening tag and closing tag.

<tag>TEXT</tag>
<a class="menu-item">PIM</a>
opening tag: <a class="menu-item">
text: PIM
closing tag: </a>

syntax://tag[text()='Text']
//a[text()='PIM']

text usually checks for an exact match.
So:
<button>Login Now</button>
This will not match:
//button[text()='Login']

//button[text()='Login Now']......this is correct


For partial text, you would use:
//button[contains(text(),'Login')]

contains() in XPath means:
Find an element where the text or attribute contains part of a value.

//tag[contains(text(),'partial text')]
//tag[contains(attribute,'partial value')]

<input placeholder="Enter your Email Address">
//input[contains(@placeholder,'Address')]

starts-with() in X Path means:
Find an element where the text or attribute starts with a certain value.

syntax for an attribute:
//tag[starts-with(@attribute,'value')]
<input placeholder="Enter your Address">
//input[starts-with(@placeholder,'Enter')]

//tag[starts-with(text()='Text')]
<button>'Login Now'</button>
//input[starts-with(text(),'Login')]

and in X Path means
Both conditions must be true.
//tag[(@attribute1='value1'and @attribute2= 'value2')]

<input required="" autocomplete="off" placeholder="First Name" id="firstName" class=" mr-sm-2 form-control" type="text">
//input[@class=" mr-sm-2 form-control" and @id="firstName"]


or in X Path means
one of the condition must be true.
//tag[@attribute1='value1' or @attribute2='value']

<input required="" autocomplete="off" placeholder="First Name" id="firstName" class=" mr-sm-2 form-control" type="text">

//input[@placeholder="Last Name" or @type="text"]


Parent in X Path:
Move from the current element to its direct parent element

syntax: 
//tag[@attribute='value']/parent::parentTag

<input required="" autocomplete="off" placeholder="First Name" id="firstName" class=" mr-sm-2 form-control" type="text">
//input[@placeholder='First Name']/parent::*
//input[@type="text"]/parent::div

ancestor in X Path:
Ancestor means move from the current element upward and find a parent, great-frand parent, grand parent, etc

syntax:
//tag[@attribute='value']/ancestor::ancestor tag
<label title="" for="hobbies-checkbox-1" class="form-check-label">Sports</label>
//label[@title=""]/ancestor::*

following-sibling:
//tag[@attribute='value']/following-sibling::following sibling tag

preceding sibling:
//tag[@attribute='value']/preceding-sibling::preceding-sibling tag
//tag[@class="form-check-label"]/preceding-sibling::*

