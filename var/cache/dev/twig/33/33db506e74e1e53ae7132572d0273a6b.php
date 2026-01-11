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

/* login/index.html.twig */
class __TwigTemplate_92f5563c29fbad070bebfec8dc719952 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 2
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "login/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "login/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "login/index.html.twig", 2);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 6
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 7
        echo "\t<div class=\"m-auto text-center\">
\t\t<div class=\"py-12 border-gray-200\">
\t\t\t<h1 class=\"text-6xl pt-12 pb-8\">
\t\t\t\tLogowanie
\t\t\t</h1>
\t\t\t";
        // line 12
        if ((isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 12, $this->source); })())) {
            // line 13
            echo "\t\t\t\t<div class=\"text-red-500\">Niepoprawny email i/lub hasło</div>
\t\t\t";
        }
        // line 15
        echo "
\t\t\t<form action=\"";
        // line 16
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
        echo "\" method=\"post\">
\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t<label class=\"block text-gray-800 required\" for=\"username\">Email</label>
\t\t\t\t\t<input class=\"border rounded-md\" type=\"text\" id=\"username\" name=\"_username\" value=\"";
        // line 19
        echo twig_escape_filter($this->env, (isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 19, $this->source); })()), "html", null, true);
        echo "\">
\t\t\t\t</div>


\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t<label class=\"block text-gray-800 required\" for=\"password\">Hasło:</label>
\t\t\t\t\t<input class=\"border rounded-md\" type=\"password\" id=\"password\" name=\"_password\">
\t\t\t\t</div>


\t\t\t\t";
        // line 31
        echo "                <input type=\"hidden\" name=\"_csrf_token\" value=\"";
        echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("authenticate"), "html", null, true);
        echo "\">
\t\t\t\t<button type=\"submit\" class=\"uppercase mt-15 bg-blue-500 text-gray-100 text-lg w-1/6 font-extrabold py-4 px-4 rounded-3xl\">
\t\t\t\t\tZaloguj się
\t\t\t\t</button>
\t\t\t</form>
\t\t</div>
\t</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "login/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  103 => 31,  90 => 19,  84 => 16,  81 => 15,  77 => 13,  75 => 12,  68 => 7,  58 => 6,  35 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{# templates/login/index.html.twig #}
{% extends 'base.html.twig' %}

{# ... #}

{% block body %}
\t<div class=\"m-auto text-center\">
\t\t<div class=\"py-12 border-gray-200\">
\t\t\t<h1 class=\"text-6xl pt-12 pb-8\">
\t\t\t\tLogowanie
\t\t\t</h1>
\t\t\t{% if error %}
\t\t\t\t<div class=\"text-red-500\">Niepoprawny email i/lub hasło</div>
\t\t\t{% endif %}

\t\t\t<form action=\"{{ path('app_login') }}\" method=\"post\">
\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t<label class=\"block text-gray-800 required\" for=\"username\">Email</label>
\t\t\t\t\t<input class=\"border rounded-md\" type=\"text\" id=\"username\" name=\"_username\" value=\"{{ last_username }}\">
\t\t\t\t</div>


\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t<label class=\"block text-gray-800 required\" for=\"password\">Hasło:</label>
\t\t\t\t\t<input class=\"border rounded-md\" type=\"password\" id=\"password\" name=\"_password\">
\t\t\t\t</div>


\t\t\t\t{# If you want to control the URL the user is redirected to on success
                <input type=\"hidden\" name=\"_target_path\" value=\"/account\"> #}
                <input type=\"hidden\" name=\"_csrf_token\" value=\"{{ csrf_token('authenticate') }}\">
\t\t\t\t<button type=\"submit\" class=\"uppercase mt-15 bg-blue-500 text-gray-100 text-lg w-1/6 font-extrabold py-4 px-4 rounded-3xl\">
\t\t\t\t\tZaloguj się
\t\t\t\t</button>
\t\t\t</form>
\t\t</div>
\t</div>
{% endblock %}", "login/index.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\login\\index.html.twig");
    }
}
