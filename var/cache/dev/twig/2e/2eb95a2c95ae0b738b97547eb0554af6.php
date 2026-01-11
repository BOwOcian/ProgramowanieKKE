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

/* post/show.html.twig */
class __TwigTemplate_4dd32a3dff1f6dda67759bd141d85735 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "post/show.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "post/show.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "post/show.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 2
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        // line 3
        echo "\tShow a post
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "<div class=\"my-14 flex flex-col\">
\t\t<div class=\"text-center\">
\t\t\t<p class=\"text-gray-500\">";
        // line 8
        echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 8, $this->source); })()), "createdAt", [], "any", false, false, false, 8), "j.m.Y"), "html", null, true);
        echo "</p>
\t\t\t<p class=\"italic text-sm\">by ";
        // line 9
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 9, $this->source); })()), "user", [], "any", false, false, false, 9), "name", [], "any", false, false, false, 9), "html", null, true);
        echo "
\t\t\t\t<img class=\"ml-2 object-scale-down h-14 w-14 rounded-full inline\" src=\"";
        // line 10
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("images/" . (((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "user", [], "any", false, true, false, 10), "image", [], "any", false, true, false, 10), "path", [], "any", true, true, false, 10) &&  !(null === twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "user", [], "any", false, true, false, 10), "image", [], "any", false, true, false, 10), "path", [], "any", false, false, false, 10)))) ? (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["post"] ?? null), "user", [], "any", false, true, false, 10), "image", [], "any", false, true, false, 10), "path", [], "any", false, false, false, 10)) : ("")))), "html", null, true);
        echo "\" alt=\"profile image\"></p>

\t\t\t<h1 class=\"mb-10 text-6xl font-bold tracking-tighter mt-5\">";
        // line 12
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 12, $this->source); })()), "title", [], "any", false, false, false, 12), "html", null, true);
        echo "</h1>
\t\t\t<hr>
\t\t</div>

\t\t<p class=\"text-gray-500 mt-10 leading-8\">
\t\t\t";
        // line 17
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 17, $this->source); })()), "content", [], "any", false, false, false, 17), "html", null, true);
        echo "
\t\t</p>

        <div class=\"flex mt-10\">

        ";
        // line 22
        echo $this->extensions['Symfony\UX\TwigComponent\Twig\ComponentExtension']->render("like", ["post" => (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 22, $this->source); })()), "isLiked" => (isset($context["isLiked"]) || array_key_exists("isLiked", $context) ? $context["isLiked"] : (function () { throw new RuntimeError('Variable "isLiked" does not exist.', 22, $this->source); })()), "isDisliked" => (isset($context["isDisliked"]) || array_key_exists("isDisliked", $context) ? $context["isDisliked"] : (function () { throw new RuntimeError('Variable "isDisliked" does not exist.', 22, $this->source); })())]);
        echo "
            ";
        // line 23
        if ((twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 23, $this->source); })()), "user", [], "any", false, false, false, 23) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 23, $this->source); })()), "user", [], "any", false, false, false, 23), "id", [], "any", false, false, false, 23) != twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 23, $this->source); })()), "user", [], "any", false, false, false, 23), "id", [], "any", false, false, false, 23)))) {
            // line 24
            echo "            ";
            if ((isset($context["isFollowing"]) || array_key_exists("isFollowing", $context) ? $context["isFollowing"] : (function () { throw new RuntimeError('Variable "isFollowing" does not exist.', 24, $this->source); })())) {
                // line 25
                echo "\t\t\tObserwowani autorzy:&nbsp;<a class=\"text-green-500 hover:text-green-700\" href=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.user", ["id" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 25, $this->source); })()), "user", [], "any", false, false, false, 25), "id", [], "any", false, false, false, 25)]), "html", null, true);
                echo "\">
\t\t\t\t";
                // line 26
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 26, $this->source); })()), "user", [], "any", false, false, false, 26), "name", [], "any", false, false, false, 26), "html", null, true);
                echo "</a>
            ";
            } else {
                // line 28
                echo "\t\t\t<a href=\"";
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("toggleFollow", ["user" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["post"]) || array_key_exists("post", $context) ? $context["post"] : (function () { throw new RuntimeError('Variable "post" does not exist.', 28, $this->source); })()), "user", [], "any", false, false, false, 28), "id", [], "any", false, false, false, 28)]), "html", null, true);
                echo "\" class=\"ml-3 inline font-bold text-sm px-6 py-2 text-white rounded bg-blue-500 hover:bg-blue-600\">
\t\t\t\t";
                // line 29
                echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\TranslationExtension')->trans("Obserwuj autora posta", [], "messages");
                echo "</a>
            ";
            }
            // line 31
            echo "            ";
        }
        // line 32
        echo "\t\t</div>

\t</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "post/show.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  155 => 32,  152 => 31,  147 => 29,  142 => 28,  137 => 26,  132 => 25,  129 => 24,  127 => 23,  123 => 22,  115 => 17,  107 => 12,  102 => 10,  98 => 9,  94 => 8,  90 => 6,  80 => 5,  69 => 3,  59 => 2,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% block title %}
\tShow a post
{% endblock %}
{% block body %}
<div class=\"my-14 flex flex-col\">
\t\t<div class=\"text-center\">
\t\t\t<p class=\"text-gray-500\">{{post.createdAt|date(\"j.m.Y\")}}</p>
\t\t\t<p class=\"italic text-sm\">by {{post.user.name}}
\t\t\t\t<img class=\"ml-2 object-scale-down h-14 w-14 rounded-full inline\" src=\"{{asset('images/' ~ post.user.image.path ?? '')}}\" alt=\"profile image\"></p>

\t\t\t<h1 class=\"mb-10 text-6xl font-bold tracking-tighter mt-5\">{{post.title}}</h1>
\t\t\t<hr>
\t\t</div>

\t\t<p class=\"text-gray-500 mt-10 leading-8\">
\t\t\t{{post.content}}
\t\t</p>

        <div class=\"flex mt-10\">

        {{ component('like', {post: post, isLiked: isLiked, isDisliked: isDisliked}) }}
            {% if app.user and app.user.id != post.user.id %}
            {% if isFollowing %}
\t\t\tObserwowani autorzy:&nbsp;<a class=\"text-green-500 hover:text-green-700\" href=\"{{ path('posts.user', {id:post.user.id}) }}\">
\t\t\t\t{{post.user.name}}</a>
            {% else %}
\t\t\t<a href=\"{{ path('toggleFollow', {user:post.user.id}) }}\" class=\"ml-3 inline font-bold text-sm px-6 py-2 text-white rounded bg-blue-500 hover:bg-blue-600\">
\t\t\t\t{%trans%}Obserwuj autora posta{%endtrans%}</a>
            {% endif %}
            {% endif %}
\t\t</div>

\t</div>
{% endblock %}", "post/show.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\post\\show.html.twig");
    }
}
