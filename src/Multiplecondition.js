function Multiplecondition()
{
    var no=10
    return(
        <div>
            {
                no==10?<h1>Number is 10</h1>:
                no==20?<h1>Number is 20</h1>:
                no==30?<h1>Number is 30</h1>:null
            }
        </div>
    )
}
export default Multiplecondition