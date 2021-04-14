<nav class="navigator">
    <div class="logo">
        HOME
    </div>
    <div class="right">
        <ul>
            <li>ABOUT</li>
            <li>PEOPLE</li>
        </ul>
    </div>
</nav>

<style>
    nav.navigator {
        position: fixed;
        width: 100%;
        height: 120px;
        color: rgb(226, 26, 0);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .logo {
        padding: 20px;
        padding-left: 40px;
        padding-top: 30px;
    }

    .right {
        margin-right: 50px;
        margin-top: 10px;
    }

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
    }

    li {
        margin-right: 20px;
    }
</style>
