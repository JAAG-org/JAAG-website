<script>
     import { link } from "svelte-routing";
</script>

<nav class="navigator">
    <div class="logo">
        <a class="link" use:link href="/"> HOME </a>
    </div>
    <div class="right">
        <ul>
            <li>
                <a class="link" use:link href="/about"> ABOUT </a>
            </li>
            <li>
                <a class="link" use:link href="/works"> WORKS </a>
            </li>
            <li>
                <a class="link" use:link href="/events"> EVENTS </a>
            </li>
        </ul>
    </div>
</nav>

<style>
    nav.navigator {
        position: fixed;
        width: 100%;
        height: 120px;
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

    .link {
        color: rgb(226, 26, 0);
        text-decoration: none;
    }
</style>
