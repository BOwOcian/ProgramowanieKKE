<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* components/like.html.twig */
class __TwigTemplate_d3aac70f81a9f1234f941d12f8312a9d extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/like.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/like.html.twig"));

        // line 1
        echo "<div class=\"flex\" ";
        echo twig_escape_filter($this->env, (isset($context["attributes"]) || array_key_exists("attributes", $context) ? $context["attributes"] : (function () { throw new RuntimeError('Variable "attributes" does not exist.', 1, $this->source); })()), "html", null, true);
        echo ">
";
        // line 2
        if (twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 2, $this->source); })()), "user", [], "any", false, false, false, 2)) {
            // line 3
            echo "    ";
            if ((isset($context["isLiked"]) || array_key_exists("isLiked", $context) ? $context["isLiked"] : (function () { throw new RuntimeError('Variable "isLiked" does not exist.', 3, $this->source); })())) {
                // line 4
                echo "\t<a id=\"";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 4, $this->source); })()), "id", [], "any", false, false, false, 4), "html", null, true);
                echo "\" title=\"odlike'uj\" class=\"cursor-pointer\" data-action=\"live#action\" data-action-name=\"undoLike\">

\t\t";
                // line 6
                echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("like_icon", ["class" => "fill-green-500 hover:stroke-cyan-700"]);
                echo "
\t</a>
    ";
            } elseif (            // line 8
(isset($context["isDisliked"]) || array_key_exists("isDisliked", $context) ? $context["isDisliked"] : (function () { throw new RuntimeError('Variable "isDisliked" does not exist.', 8, $this->source); })())) {
                // line 9
                echo "\t<a title=\"znielubiłeś już ten post\" class=\"post\">
\t\t";
                // line 10
                echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("like_icon", ["class" => "fill-green-300"]);
                echo "
\t</a>

    ";
            } else {
                // line 14
                echo "\t
    <a title=\"like\" class=\"cursor-pointer\" data-action=\"live#action\" data-action-name=\"like\">
\t\t\t";
                // line 16
                echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("like_icon", ["class" => "fill-green-300 hover:stroke-cyan-700"]);
                echo "
\t\t</a>
        ";
            }
            // line 19
            echo "        (";
            echo twig_escape_filter($this->env, twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 19, $this->source); })()), "usersThatLike", [], "any", false, false, false, 19)), "html", null, true);
            echo ")
        ";
            // line 20
            if ((($context["isDisliked"]) ?? (false))) {
                // line 21
                echo "\t<a title=\"odnielub\" class=\"ml-2 cursor-pointer\" data-action=\"live#action\" data-action-name=\"undoDislike\">
\t\t";
                // line 22
                echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("unlike_icon", ["class" => "fill-red-500 hover:stroke-cyan-700"]);
                echo "
\t</a>
";
            } elseif (            // line 24
(isset($context["isLiked"]) || array_key_exists("isLiked", $context) ? $context["isLiked"] : (function () { throw new RuntimeError('Variable "isLiked" does not exist.', 24, $this->source); })())) {
                // line 25
                echo "\t<a title=\"polubiłeś już ten post\" class=\"ml-2\">
\t\t";
                // line 26
                echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("unlike_icon", ["class" => "fill-red-300"]);
                echo "
\t</a>
\t ";
            } else {
                // line 29
                echo "    <a title=\"dislike\" class=\"ml-2 cursor-pointer\" data-action=\"live#action\" data-action-name=\"dislike\">
\t\t\t";
                // line 30
                echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("unlike_icon", ["class" => "fill-red-300 hover:stroke-cyan-700"]);
                echo "
\t\t</a>
        ";
            }
            // line 33
            echo "        (";
            echo twig_escape_filter($this->env, twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 33, $this->source); })()), "usersThatDontLike", [], "any", false, false, false, 33)), "html", null, true);
            echo ")
    ";
        } else {
            // line 35
            echo "    <a href=\"#\" title=\"zaloguj się aby polubić\" class=\"pointer-events-none\">
\t\t\t";
            // line 36
            echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("like_icon", ["class" => "fill-green-300"]);
            echo "
\t\t</a>
\t\t(";
            // line 38
            echo twig_escape_filter($this->env, twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 38, $this->source); })()), "usersThatLike", [], "any", false, false, false, 38)), "html", null, true);
            echo ")
        zaloguj się aby polubić
\t\t<a href=\"#\" title=\"zaloguj się aby znielubić\" class=\"ml-2 pointer-events-none\">
\t\t\t";
            // line 41
            echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("unlike_icon", ["class" => "fill-red-300"]);
            echo "
\t\t</a>
\t\t(";
            // line 43
            echo twig_escape_filter($this->env, twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 43, $this->source); })()), "usersThatDontLike", [], "any", false, false, false, 43)), "html", null, true);
            echo ")
        zaloguj się aby znielubić
        ";
        }
        // line 46
        echo "</div>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "components/like.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  152 => 46,  146 => 43,  141 => 41,  135 => 38,  130 => 36,  127 => 35,  121 => 33,  115 => 30,  112 => 29,  106 => 26,  103 => 25,  101 => 24,  96 => 22,  93 => 21,  91 => 20,  86 => 19,  80 => 16,  76 => 14,  69 => 10,  66 => 9,  64 => 8,  59 => 6,  53 => 4,  50 => 3,  48 => 2,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"flex\" {{ attributes }}>
{% if app.user %}
    {% if isLiked %}
\t<a id=\"{{post.id}}\" title=\"odlike'uj\" class=\"cursor-pointer\" data-action=\"live#action\" data-action-name=\"undoLike\">

\t\t{{ component('like_icon', {class: 'fill-green-500 hover:stroke-cyan-700'}) }}
\t</a>
    {% elseif isDisliked %}
\t<a title=\"znielubiłeś już ten post\" class=\"post\">
\t\t{{ component('like_icon', {class: 'fill-green-300'}) }}
\t</a>

    {% else %}
\t
    <a title=\"like\" class=\"cursor-pointer\" data-action=\"live#action\" data-action-name=\"like\">
\t\t\t{{ component('like_icon', {class: 'fill-green-300 hover:stroke-cyan-700'}) }}
\t\t</a>
        {% endif %}
        ({{post.usersThatLike|length}})
        {% if isDisliked ?? false %}
\t<a title=\"odnielub\" class=\"ml-2 cursor-pointer\" data-action=\"live#action\" data-action-name=\"undoDislike\">
\t\t{{ component('unlike_icon', {class: 'fill-red-500 hover:stroke-cyan-700'}) }}
\t</a>
{% elseif isLiked %}
\t<a title=\"polubiłeś już ten post\" class=\"ml-2\">
\t\t{{ component('unlike_icon', {class: 'fill-red-300'}) }}
\t</a>
\t {% else %}
    <a title=\"dislike\" class=\"ml-2 cursor-pointer\" data-action=\"live#action\" data-action-name=\"dislike\">
\t\t\t{{ component('unlike_icon', {class: 'fill-red-300 hover:stroke-cyan-700'}) }}
\t\t</a>
        {% endif %}
        ({{post.usersThatDontLike|length}})
    {% else %}
    <a href=\"#\" title=\"zaloguj się aby polubić\" class=\"pointer-events-none\">
\t\t\t{{ component('like_icon', {class: 'fill-green-300'}) }}
\t\t</a>
\t\t({{post.usersThatLike|length}})
        zaloguj się aby polubić
\t\t<a href=\"#\" title=\"zaloguj się aby znielubić\" class=\"ml-2 pointer-events-none\">
\t\t\t{{ component('unlike_icon', {class: 'fill-red-300'}) }}
\t\t</a>
\t\t({{post.usersThatDontLike|length}})
        zaloguj się aby znielubić
        {% endif %}
</div>
", "components/like.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\components\\like.html.twig");
    }
}
