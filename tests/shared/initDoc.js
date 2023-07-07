const dom = require('@xmldom/xmldom').DOMParser;

const docXml = `<series xmlns="http://www.example.com/series" 
                        xmlns:s="http://www.example.com/series" 
                        xmlns:p="http://www.example.com/people" 
                        xmlns:b="http://www.example.com/books" 
                        target="Young Adult" 
                        s:numBooks="7"
                >
                  <p:characters>
                    <p:character name="Harry Potter" p:mf="m" />
                    <p:character name="Hermione Granger" p:mf="f" />
                  </p:characters>
                  <plotDevices>
                    <deathlyHallows xmlns="">
                      <deathlyHallow>Resurrection Stone</deathlyHallow>
                      <deathlyHallow>Invisibility Cloak</deathlyHallow>
                      <deathlyHallow>Elder Wand</deathlyHallow>
                    </deathlyHallows>
                  </plotDevices>
                </series>`;
                
module.exports = () => new dom().parseFromString(docXml);