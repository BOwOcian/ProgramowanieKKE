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

/* post/index.html.twig */
class __TwigTemplate_a5d738bbe75fa15a0085673d71dee155 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "post/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "post/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "post/index.html.twig", 1);
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
        echo "\tWszystkie posty
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
        echo "            ";
        // line 7
        echo "            <div class=\"my-14\">
\t\t\t\t<h1 class=\"text-6xl tracking-tighter font-bold mb-6\">Najnowsze posty ";
        // line 8
        (((array_key_exists("user", $context) &&  !(null === (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 8, $this->source); })())))) ? (print (twig_escape_filter($this->env, (isset($context["user"]) || array_key_exists("user", $context) ? $context["user"] : (function () { throw new RuntimeError('Variable "user" does not exist.', 8, $this->source); })()), "html", null, true))) : (print ("")));
        echo "
\t\t\t\t</h1>
\t\t\t\t<p class=\"mb-8 text-gray-500\">Blog został stworzony przy pomocy Symfony oraz Tailwind CSS
\t\t\t\t</p>
\t\t\t\t<hr/>
\t\t\t</div>

            ";
        // line 16
        echo "            ";
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["posts"]) || array_key_exists("posts", $context) ? $context["posts"] : (function () { throw new RuntimeError('Variable "posts" does not exist.', 16, $this->source); })()));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["post"]) {
            // line 17
            echo "            <div class=\"my-14 flex flex-col md:flex-row\">
\t\t\t\t<p class=\"mb-8 text-gray-500 mr-20\">";
            // line 18
            echo twig_escape_filter($this->env, twig_date_format_filter($this->env, twig_get_attribute($this->env, $this->source, $context["post"], "createdAt", [], "any", false, false, false, 18), "j.m.Y"), "html", null, true);
            echo "</p>
\t\t\t\t<div class=\"space-y-4\">
\t\t\t\t\t<h1 class=\"text-3xl font-bold tracking-tighter\">";
            // line 20
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["post"], "title", [], "any", false, false, false, 20), "html", null, true);
            echo "</h1>
\t\t\t\t\t<p class=\"text-gray-500\">";
            // line 21
            echo twig_escape_filter($this->env, (twig_slice($this->env, twig_get_attribute($this->env, $this->source, $context["post"], "content", [], "any", false, false, false, 21), 0, 200) . "..."), "html", null, true);
            echo "</p>
\t\t\t\t\t<p>
\t\t\t\t\t\t<a class=\"text-red-500 hover:text-red-900 mt-8\" href=\"";
            // line 23
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.show", ["id" => twig_get_attribute($this->env, $this->source, $context["post"], "id", [], "any", false, false, false, 23)]), "html", null, true);
            echo "\">Czytaj dalej</a>
\t\t\t\t\t</p>
                    ";
            // line 25
            if ((twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 25, $this->source); })()), "user", [], "any", false, false, false, 25) && (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 25, $this->source); })()), "user", [], "any", false, false, false, 25), "id", [], "any", false, false, false, 25) == twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["post"], "user", [], "any", false, false, false, 25), "id", [], "any", false, false, false, 25)))) {
                // line 26
                echo "                    <div class=\"flex\">
                    <a href=\"";
                // line 27
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.edit", ["id" => twig_get_attribute($this->env, $this->source, $context["post"], "id", [], "any", false, false, false, 27)]), "html", null, true);
                echo "\" title=\"edit\" class=\"mr-2 cursor-pointer\">
                        ";
                // line 28
                echo twig_include($this->env, $context, "svg_icons/edit_icon.html.twig");
                echo "
                    </a>

                    <form method=\"POST\" action=\"";
                // line 31
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.delete", ["id" => twig_get_attribute($this->env, $this->source, $context["post"], "id", [], "any", false, false, false, 31)]), "html", null, true);
                echo "\">
                        <button type=\"submit\" href=\"";
                // line 32
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.delete", ["id" => twig_get_attribute($this->env, $this->source, $context["post"], "id", [], "any", false, false, false, 32)]), "html", null, true);
                echo "\"
                            onclick=\"return confirm('Are you sure?')\" title=\"delete\" class=\"cursor-pointer\">
                            ";
                // line 34
                echo twig_include($this->env, $context, "svg_icons/delete_icon.html.twig");
                echo "
                        </button>
                    </form>

                </div>
                ";
            }
            // line 40
            echo "\t\t\t\t</div>
\t\t\t</div>
\t\t\t<hr/>
            ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['post'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 44
        echo "
    <br>
    ";
        // line 46
        echo $this->env->getRuntime('Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationRuntime')->render($this->env, (isset($context["posts"]) || array_key_exists("posts", $context) ? $context["posts"] : (function () { throw new RuntimeError('Variable "posts" does not exist.', 46, $this->source); })()));
        echo "
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "post/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  199 => 46,  195 => 44,  178 => 40,  169 => 34,  164 => 32,  160 => 31,  154 => 28,  150 => 27,  147 => 26,  145 => 25,  140 => 23,  135 => 21,  131 => 20,  126 => 18,  123 => 17,  105 => 16,  95 => 8,  92 => 7,  90 => 6,  80 => 5,  69 => 3,  59 => 2,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% block title %}
\tWszystkie posty
{% endblock %}
{% block body %}
            {# latest posts #}
            <div class=\"my-14\">
\t\t\t\t<h1 class=\"text-6xl tracking-tighter font-bold mb-6\">Najnowsze posty {{user ?? ''}}
\t\t\t\t</h1>
\t\t\t\t<p class=\"mb-8 text-gray-500\">Blog został stworzony przy pomocy Symfony oraz Tailwind CSS
\t\t\t\t</p>
\t\t\t\t<hr/>
\t\t\t</div>

            {# posts #}
            {% for post in posts %}
            <div class=\"my-14 flex flex-col md:flex-row\">
\t\t\t\t<p class=\"mb-8 text-gray-500 mr-20\">{{post.createdAt|date(\"j.m.Y\")}}</p>
\t\t\t\t<div class=\"space-y-4\">
\t\t\t\t\t<h1 class=\"text-3xl font-bold tracking-tighter\">{{post.title}}</h1>
\t\t\t\t\t<p class=\"text-gray-500\">{{post.content|slice(0, 200) ~ '...'}}</p>
\t\t\t\t\t<p>
\t\t\t\t\t\t<a class=\"text-red-500 hover:text-red-900 mt-8\" href=\"{{ path('posts.show', {id:post.id}) }}\">Czytaj dalej</a>
\t\t\t\t\t</p>
                    {% if app.user and app.user.id == post.user.id %}
                    <div class=\"flex\">
                    <a href=\"{{ path('posts.edit', {id:post.id}) }}\" title=\"edit\" class=\"mr-2 cursor-pointer\">
                        {{include('svg_icons/edit_icon.html.twig')}}
                    </a>

                    <form method=\"POST\" action=\"{{ path('posts.delete', {id:post.id}) }}\">
                        <button type=\"submit\" href=\"{{ path('posts.delete', {id:post.id}) }}\"
                            onclick=\"return confirm('Are you sure?')\" title=\"delete\" class=\"cursor-pointer\">
                            {{include('svg_icons/delete_icon.html.twig')}}
                        </button>
                    </form>

                </div>
                {% endif %}
\t\t\t\t</div>
\t\t\t</div>
\t\t\t<hr/>
            {% endfor %}

    <br>
    {{ knp_pagination_render(posts) }}
{% endblock %}
     
", "post/index.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\post\\index.html.twig");
    }
}
