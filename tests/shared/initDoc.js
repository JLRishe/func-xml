const dom = require('xmldom').DOMParser;

const docXml = `<series xmlns="http://www.example.com/series" xmlns:p="http://www.example.com/people" xmlns:b="http://www.example.com/books">
                  <p:characters>
				    <p:character name="Harry Potter" />
					<p:character name="Hermione Granger" />
				  </p:characters>
				</series>`;
				
module.exports = () => new dom().parseFromString(docXml);