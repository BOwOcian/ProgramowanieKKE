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

/* dashboard/edit.html.twig */
class __TwigTemplate_6b001cb672b20ec8b2c40a5447b86fa3 extends Template
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
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/edit.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/edit.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "dashboard/edit.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 2
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 3
        echo "<div class=\"py-12 mt-10\">
    <div class=\"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6\">
      <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg\">
        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">
          ";
        // line 8
        echo twig_include($this->env, $context, "dashboard/_update_profile_information_form.html.twig");
        echo "
          </div>
        </div>

        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">
          ";
        // line 14
        echo twig_include($this->env, $context, "dashboard/_update_profile_image_form.html.twig");
        echo "
          </div>
        </div>

        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">
          ";
        // line 20
        echo twig_include($this->env, $context, "dashboard/_update_password_form.html.twig");
        echo "
          </div>
        </div>

        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">";
        // line 25
        echo twig_include($this->env, $context, "dashboard/_delete_user_form.html.twig");
        echo "</div>
        </div>
      </div>
    </div>
  </div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "dashboard/edit.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  101 => 25,  93 => 20,  84 => 14,  75 => 8,  68 => 3,  58 => 2,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% block body %}
<div class=\"py-12 mt-10\">
    <div class=\"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6\">
      <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg\">
        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">
          {{include('dashboard/_update_profile_information_form.html.twig')}}
          </div>
        </div>

        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">
          {{include('dashboard/_update_profile_image_form.html.twig')}}
          </div>
        </div>

        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">
          {{ include('dashboard/_update_password_form.html.twig') }}
          </div>
        </div>

        <div class=\"p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-16\">
          <div class=\"max-w-xl\">{{ include('dashboard/_delete_user_form.html.twig') }}</div>
        </div>
      </div>
    </div>
  </div>
{% endblock %}", "dashboard/edit.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\dashboard\\edit.html.twig");
    }
}
