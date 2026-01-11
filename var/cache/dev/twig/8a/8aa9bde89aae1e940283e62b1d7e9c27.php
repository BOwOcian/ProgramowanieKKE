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

/* components/search.html.twig */
class __TwigTemplate_098ed173ad5ce4554a2366a7a6fa7196 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/search.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "components/search.html.twig"));

        // line 1
        echo "<div class=\"ml-4\" ";
        echo twig_escape_filter($this->env, (isset($context["attributes"]) || array_key_exists("attributes", $context) ? $context["attributes"] : (function () { throw new RuntimeError('Variable "attributes" does not exist.', 1, $this->source); })()), "html", null, true);
        echo ">
\t<label>
\t\t<input data-model=\"query\" value=\"";
        // line 3
        echo twig_escape_filter($this->env, (isset($context["query"]) || array_key_exists("query", $context) ? $context["query"] : (function () { throw new RuntimeError('Variable "query" does not exist.', 3, $this->source); })()), "html", null, true);
        echo "\" class=\"placeholder:italic placeholder:text-slate-400 bg-white w-full border-slate-300 rounded-md py-2 pl-9 pr-3 sm:text-sm\" placeholder=\"Wyszukaj post ...\" type=\"text\" name=\"search\"/>
\t</label>
\t<ul class=\"bg-white border border-gray-100 mt-2 absolute\">
    ";
        // line 6
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["this"]) || array_key_exists("this", $context) ? $context["this"] : (function () { throw new RuntimeError('Variable "this" does not exist.', 6, $this->source); })()), "posts", [], "any", false, false, false, 6));
        foreach ($context['_seq'] as $context["_key"] => $context["post"]) {
            // line 7
            echo "\t\t<li class=\"pl-8 pr-2 py-1 border-b-2 border-gray-100 relative hover:bg-yellow-50 hover:text-gray-900\">
\t\t\t<a href=\"";
            // line 8
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.show", ["id" => twig_get_attribute($this->env, $this->source, $context["post"], "id", [], "any", false, false, false, 8)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["post"], "title", [], "any", false, false, false, 8), "html", null, true);
            echo "</a>
\t\t</li>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['post'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 11
        echo "\t\t
\t</ul>
</div>
";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "components/search.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  73 => 11,  62 => 8,  59 => 7,  55 => 6,  49 => 3,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"ml-4\" {{attributes}}>
\t<label>
\t\t<input data-model=\"query\" value=\"{{ query }}\" class=\"placeholder:italic placeholder:text-slate-400 bg-white w-full border-slate-300 rounded-md py-2 pl-9 pr-3 sm:text-sm\" placeholder=\"Wyszukaj post ...\" type=\"text\" name=\"search\"/>
\t</label>
\t<ul class=\"bg-white border border-gray-100 mt-2 absolute\">
    {% for post in this.posts %}
\t\t<li class=\"pl-8 pr-2 py-1 border-b-2 border-gray-100 relative hover:bg-yellow-50 hover:text-gray-900\">
\t\t\t<a href=\"{{ path('posts.show', {id:post.id}) }}\">{{post.title}}</a>
\t\t</li>
    {% endfor %}
\t\t
\t</ul>
</div>
", "components/search.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\components\\search.html.twig");
    }
}
