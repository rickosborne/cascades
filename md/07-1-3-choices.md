<!-- AFTER #awake -->

# Choices

> Lily needs to choose what to do next.
> The _fate:code_ command for this is `DECIDE BETWEEN` and is a little more verbose.
> It presents a number of `CHOOSE` options, each of which includes a description of the option.
> You can tell which instructions go with each choice based on how they are indented.
> You'll follow the instructions of only one option.
>
> There's one extra new item in this _fate:code_ block: a _comment_.
> Comments aren't used by computers, just by the humans who maintain the source code.
> In _fate:code_, comments are lines that start with double forward slashes, like this: `//`.


```fatecode
// I can't do both.
DECIDE BETWEEN

    // I could go forward
    // and talk to passengers
    CHOOSE "collect service items"
        JUMP #collectServiceItems

    // Or I could stay back
    // here and clean up
    CHOOSE "clean the cart and galley"
        JUMP #cleanTheCartAndGalley

END DECIDE
```
