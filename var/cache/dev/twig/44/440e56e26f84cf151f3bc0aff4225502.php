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

/* post/edit.html.twig */
class __TwigTemplate_dd4354e3bfd8d64cf5e017d9d93f989d extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "post/edit.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "post/edit.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "post/edit.html.twig", 1);
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
        echo "Edit post
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
        echo "<div class=\"my-14\">
\t\t<h1 class=\"text-4xl\">Edytuj post</h1>
\t\t<div class=\"w-full\">
\t\t\t";
        // line 9
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 9, $this->source); })()), 'form_start', ["attr" => ["class" => "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"]]);
        // line 10
        echo "
\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t";
        // line 12
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 12, $this->source); })()), "title", [], "any", false, false, false, 12), 'label', ["label_attr" => ["class" => "block text-gray-700 font-bold mb-2"], "label" => "Tytuł posta"]);
        // line 13
        echo "
                ";
        // line 14
        $context["title_error"] = (($this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 14, $this->source); })()), "title", [], "any", false, false, false, 14), 'errors')) ? ("border-red-500 ") : (""));
        // line 15
        echo "\t\t\t\t\t";
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 15, $this->source); })()), "title", [], "any", false, false, false, 15), 'widget', ["attr" => ["class" => ((isset($context["title_error"]) || array_key_exists("title_error", $context) ? $context["title_error"] : (function () { throw new RuntimeError('Variable "title_error" does not exist.', 15, $this->source); })()) . "shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"), "placeholder" => "write post content here"]]);
        // line 17
        echo "
\t\t\t\t\t";
        // line 18
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 18, $this->source); })()), "title", [], "any", false, false, false, 18), "vars", [], "any", false, false, false, 18), "errors", [], "array", false, false, false, 18)) > 0)) {
            // line 19
            echo "\t\t\t\t\t<p class=\"text-red-500 text-xs italic\">
\t\t\t\t\t\t";
            // line 20
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 20, $this->source); })()), "title", [], "any", false, false, false, 20), "vars", [], "any", false, false, false, 20), "errors", [], "array", false, false, false, 20));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 21
                echo "\t\t\t\t\t\t\t<span>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 21), "html", null, true);
                echo "</span>
\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 23
            echo "\t\t\t\t\t</p>
\t\t\t\t";
        }
        // line 25
        echo "\t\t\t\t</div>
\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t";
        // line 27
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 27, $this->source); })()), "content", [], "any", false, false, false, 27), 'label', ["label_attr" => ["class" => "block text-gray-700 font-bold mb-2"], "label" => "Treść posta"]);
        // line 28
        echo "
                ";
        // line 29
        $context["content_error"] = (($this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 29, $this->source); })()), "content", [], "any", false, false, false, 29), 'errors')) ? ("border-red-500 ") : (""));
        // line 30
        echo "\t\t\t\t\t";
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 30, $this->source); })()), "content", [], "any", false, false, false, 30), 'widget', ["attr" => ["class" => ((isset($context["content_error"]) || array_key_exists("content_error", $context) ? $context["content_error"] : (function () { throw new RuntimeError('Variable "content_error" does not exist.', 30, $this->source); })()) . "drop-shadow-lg w-full h-60 p-4 border
            focus:outline-none focus:shadow-outline"), "placeholder" => "write post content here"]]);
        // line 31
        echo "
\t\t\t\t";
        // line 32
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 32, $this->source); })()), "content", [], "any", false, false, false, 32), "vars", [], "any", false, false, false, 32), "errors", [], "array", false, false, false, 32)) > 0)) {
            // line 33
            echo "\t\t\t\t\t<p class=\"text-red-500 text-xs italic\">
\t\t\t\t\t\t";
            // line 34
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 34, $this->source); })()), "content", [], "any", false, false, false, 34), "vars", [], "any", false, false, false, 34), "errors", [], "array", false, false, false, 34));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 35
                echo "\t\t\t\t\t\t\t<span>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 35), "html", null, true);
                echo "</span>
\t\t\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 37
            echo "\t\t\t\t\t</p>
\t\t\t\t";
        }
        // line 39
        echo "\t\t\t\t</div>
\t\t\t\t";
        // line 40
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 40, $this->source); })()), "save", [], "any", false, false, false, 40), 'widget', ["label" => "Zapisz post", "attr" => ["class" => "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded cursor-pointer"]]);
        // line 42
        echo "
\t\t\t";
        // line 43
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 43, $this->source); })()), 'form_end');
        echo "
\t\t</div>
\t</div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "post/edit.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  186 => 43,  183 => 42,  180 => 40,  177 => 39,  173 => 37,  164 => 35,  160 => 34,  157 => 33,  155 => 32,  152 => 31,  148 => 30,  146 => 29,  143 => 28,  141 => 27,  137 => 25,  133 => 23,  124 => 21,  120 => 20,  117 => 19,  115 => 18,  112 => 17,  108 => 15,  106 => 14,  103 => 13,  101 => 12,  97 => 10,  95 => 9,  90 => 6,  80 => 5,  69 => 3,  59 => 2,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% block title %}
Edit post
{% endblock %}
{% block body %}
<div class=\"my-14\">
\t\t<h1 class=\"text-4xl\">Edytuj post</h1>
\t\t<div class=\"w-full\">
\t\t\t{{ form_start(form, {'attr': {'class': 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' }}
\t\t\t) }}
\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t{{ form_label(form.title, 'Tytuł posta', {'label_attr': {'class': 'block text-gray-700 font-bold mb-2' }}
\t\t\t\t) }}
                {% set title_error = form_errors(form.title) ? 'border-red-500 ' : ''%}
\t\t\t\t\t{{ form_widget(form.title, {'attr': {'class': (title_error)~'shadow appearance-none border rounded w-full
            py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline','placeholder':'write post content here' }}
\t\t\t\t) }}
\t\t\t\t\t{% if form.title.vars['errors']|length > 0 %}
\t\t\t\t\t<p class=\"text-red-500 text-xs italic\">
\t\t\t\t\t\t{% for error in form.title.vars['errors'] %}
\t\t\t\t\t\t\t<span>{{ error.message }}</span>
\t\t\t\t\t\t{% endfor %}
\t\t\t\t\t</p>
\t\t\t\t{% endif %}
\t\t\t\t</div>
\t\t\t\t<div class=\"mb-6\">
\t\t\t\t\t{{ form_label(form.content, 'Treść posta', {'label_attr': {'class': 'block text-gray-700 font-bold mb-2' }}
\t\t\t\t) }}
                {% set content_error = form_errors(form.content) ? 'border-red-500 ' : '' %}
\t\t\t\t\t{{ form_widget(form.content, {'attr': {'class': (content_error)~'drop-shadow-lg w-full h-60 p-4 border
            focus:outline-none focus:shadow-outline','placeholder':'write post content here'}}) }}
\t\t\t\t{% if form.content.vars['errors']|length > 0 %}
\t\t\t\t\t<p class=\"text-red-500 text-xs italic\">
\t\t\t\t\t\t{% for error in form.content.vars['errors'] %}
\t\t\t\t\t\t\t<span>{{ error.message }}</span>
\t\t\t\t\t\t{% endfor %}
\t\t\t\t\t</p>
\t\t\t\t{% endif %}
\t\t\t\t</div>
\t\t\t\t{{ form_widget(form.save, { 'label': 'Zapisz post', 'attr': {'class': 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
        rounded cursor-pointer' }}
\t\t\t) }}
\t\t\t{{ form_end(form) }}
\t\t</div>
\t</div>
{% endblock %}", "post/edit.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\post\\edit.html.twig");
    }
}
