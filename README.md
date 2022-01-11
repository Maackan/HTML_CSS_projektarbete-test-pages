# HTML_CSS_projektarbete
Ett repo att forka en gång per grupp och bygga projektarbetet ovanpå

Projektkontrakt:
<br>* 23, 24 och 31 december är vi "lediga". 
<br>* Vi vill jobba dagtid.
<br>* Vi hör av oss till varandra dagen innan och stämmer av att vi kan jobba tillsammans nästkommande dag.
<br>* Vi jobbar individuellt och tillsammans.</br>

<br>1. VÄLKOMSTSIDA - Herman
<br>2. KONTAKTSIDA -Ali
<br>3. PRODUKTSIDA - Markus
<br>4. CONTRIBUTORS - Marielle
<br>5. BLOGG - Eventuellt gemensamt


# Footer information
 Ali har gjort en snygg footer till contacts sidan, men eftersom den är baserad på libraries som inte är importerade på alla sidor så har jag(Herman) modifierat den lite så att den går att använda på allas sidor utan att importera extra libraries. <br>
 Problemet med att importera libraries är att tiden det tar för sidan att ladda blir längre vilket leder till att animationen för navbaren inte hänger med. <br> Jag vill bara upplyysa er om denna ändring då jag inte vill avgöra eller bestämma något själv. Jag kommer att merga denna branch och därmed lägga in min footer variant på alla sidor *sålänge*.
<br>

>## **Alis footer**
>>Alis footer baserad på Bootstrap (kräver att alla importerar extra libraries utöver Bootstrap)
>```
><footer>
>        <div class="container">
>          <div class="row">
>            <div class="col-md-12">
>              <div class="inner-content">
>                <p>Copyright &copy; 2022 
>              
>              - Design:NINJA & Girl Talk
>              </div>
>            </div>
>          </div>
>        </div>
>      </footer>
>```
> Den ser ut såhär:
> ![](/img/Alis-Footer.png)

> ## **Hermans footer**
> 
>>Hermans footer som fungerar utan extra libraries
>
>```
>    <footer>
>        <div class="footer-overlay">
>          <div class="fc1">
>            <div class="fc2">
>              <div class="in-cont">
>                <p>Copyright &copy; 2022 
>              
>              - Design:NINJA & Girl Talk
>              </div>
>            </div>
>          </div>
>        </div>
>      </footer>
>```
> Den ser ut såhär:
> ![](/img/Hermans-Footer.png)

*Koden finns nu lagrad i denna README så att vi kan byta footer vid behov.*