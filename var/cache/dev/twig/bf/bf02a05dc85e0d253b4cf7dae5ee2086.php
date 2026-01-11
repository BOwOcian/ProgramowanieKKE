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

/* dashboard/index.html.twig */
class __TwigTemplate_09950dbabebc8903d5a05fb854ee0862 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/index.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "dashboard/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Hello ";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 3, $this->source); })()), "user", [], "any", false, false, false, 3), "email", [], "any", false, false, false, 3), "html", null, true);
        echo "!";
        
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
        echo "
<div class=\"py-12 mt-10\">
    <div class=\"max-w-7xl mx-auto sm:px-6 lg:px-8\">
      <div class=\"bg-white overflow-hidden shadow-sm sm:rounded-lg\">
        <div class=\"p-6 text-gray-900\">
          Jesteś zalogowany/zalogowana!<br>
          Aby edytować profil <a class=\"text-red-500 hover:text-red-800\" href=\"";
        // line 12
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_profile");
        echo "\">kliknij tutaj</a>
          <div class=\"mt-6\" x-data=\"{ tab: 1 }\">
            <div class=\"flex mx-2 mb-4 space-x-4 text-xl border-b border-gray-300\">
              <div class=\"hover:text-indigo-600 py-2 cursor-pointer\" :class=\"{ 'text-indigo-600 border-b border-indigo-600': tab == 1 }\" @click=\"tab = 1\">Obserwujący</div>
 
              <div class=\"hover:text-indigo-600 py-2 pl-2 cursor-pointer\" :class=\"{ 'text-indigo-600 border-b border-indigo-600': tab == 2 }\" @click=\"tab = 2\">Obserwowani</div>

              <div class=\"hover:text-indigo-600 py-2 pl-2 cursor-pointer\" :class=\"{ 'text-indigo-600 border-b border-indigo-600': tab == 3 }\" @click=\"tab = 3\">Polubione posty</div>
            </div>
            <div x-show=\"tab === 1\">
              <b>Użytkownicy którzy cię śledzą:</b>
              <ul>
              ";
        // line 24
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 24, $this->source); })()), "user", [], "any", false, false, false, 24), "getFollowers", [], "method", false, false, false, 24));
        foreach ($context['_seq'] as $context["_key"] => $context["follower"]) {
            // line 25
            echo "                <li>
                  <a class=\"hover:text-stone-500\" href=\"";
            // line 26
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.user", ["id" => twig_get_attribute($this->env, $this->source, $context["follower"], "getId", [], "method", false, false, false, 26)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["follower"], "getName", [], "method", false, false, false, 26), "html", null, true);
            echo "</a>
                </li>
            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['follower'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 29
        echo "              </ul>
            </div>
            <div x-show=\"tab === 2\">
              <b>Użytkownicy których śledzisz:</b>
              <ul class=\"space-y-4\">
              ";
        // line 34
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 34, $this->source); })()), "user", [], "any", false, false, false, 34), "getFollowing", [], "method", false, false, false, 34));
        foreach ($context['_seq'] as $context["_key"] => $context["following"]) {
            // line 35
            echo "                <li>
                  <a class=\"hover:text-stone-500\" href=\"";
            // line 36
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.user", ["id" => twig_get_attribute($this->env, $this->source, $context["following"], "getId", [], "method", false, false, false, 36)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["following"], "getName", [], "method", false, false, false, 36), "html", null, true);
            echo "</a>
                  <a href=\"";
            // line 37
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("toggleFollow", ["user" => twig_get_attribute($this->env, $this->source, $context["following"], "getId", [], "method", false, false, false, 37)]), "html", null, true);
            echo "\" class=\"ml-3 inline font-bold text-sm px-4 py-1 text-white rounded bg-blue-500 hover:bg-blue-600\">";
            echo $this->env->getExtension('Symfony\Bridge\Twig\Extension\TranslationExtension')->trans("Unfollow", [], "messages");
            echo "</a>
                </li>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['following'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 40
        echo "              </ul>
            </div>
            <div x-show=\"tab === 3\">
              <b>Polubione posty:</b>
              <ul>
              ";
        // line 45
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 45, $this->source); })()), "user", [], "any", false, false, false, 45), "getLikedPosts", [], "method", false, false, false, 45));
        foreach ($context['_seq'] as $context["_key"] => $context["lpost"]) {
            // line 46
            echo "                <li>
                  <a class=\"hover:text-stone-500\" href=\"";
            // line 47
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.show", ["id" => twig_get_attribute($this->env, $this->source, $context["lpost"], "id", [], "any", false, false, false, 47)]), "html", null, true);
            echo "\">";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["lpost"], "title", [], "any", false, false, false, 47), "html", null, true);
            echo "</a>
                </li>
                ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['lpost'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 50
        echo "              </ul>
            </div>
          </div>
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
        return "dashboard/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  187 => 50,  176 => 47,  173 => 46,  169 => 45,  162 => 40,  151 => 37,  145 => 36,  142 => 35,  138 => 34,  131 => 29,  120 => 26,  117 => 25,  113 => 24,  98 => 12,  90 => 6,  80 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello {{ app.user.email }}!{% endblock %}

{% block body %}

<div class=\"py-12 mt-10\">
    <div class=\"max-w-7xl mx-auto sm:px-6 lg:px-8\">
      <div class=\"bg-white overflow-hidden shadow-sm sm:rounded-lg\">
        <div class=\"p-6 text-gray-900\">
          Jesteś zalogowany/zalogowana!<br>
          Aby edytować profil <a class=\"text-red-500 hover:text-red-800\" href=\"{{ path('app_profile') }}\">kliknij tutaj</a>
          <div class=\"mt-6\" x-data=\"{ tab: 1 }\">
            <div class=\"flex mx-2 mb-4 space-x-4 text-xl border-b border-gray-300\">
              <div class=\"hover:text-indigo-600 py-2 cursor-pointer\" :class=\"{ 'text-indigo-600 border-b border-indigo-600': tab == 1 }\" @click=\"tab = 1\">Obserwujący</div>
 
              <div class=\"hover:text-indigo-600 py-2 pl-2 cursor-pointer\" :class=\"{ 'text-indigo-600 border-b border-indigo-600': tab == 2 }\" @click=\"tab = 2\">Obserwowani</div>

              <div class=\"hover:text-indigo-600 py-2 pl-2 cursor-pointer\" :class=\"{ 'text-indigo-600 border-b border-indigo-600': tab == 3 }\" @click=\"tab = 3\">Polubione posty</div>
            </div>
            <div x-show=\"tab === 1\">
              <b>Użytkownicy którzy cię śledzą:</b>
              <ul>
              {% for follower in app.user.getFollowers() %}
                <li>
                  <a class=\"hover:text-stone-500\" href=\"{{ path('posts.user' ,{id: follower.getId()}) }}\">{{follower.getName()}}</a>
                </li>
            {% endfor %}
              </ul>
            </div>
            <div x-show=\"tab === 2\">
              <b>Użytkownicy których śledzisz:</b>
              <ul class=\"space-y-4\">
              {% for following in app.user.getFollowing() %}
                <li>
                  <a class=\"hover:text-stone-500\" href=\"{{ path('posts.user', { id: following.getId() }) }}\">{{following.getName()}}</a>
                  <a href=\"{{ path('toggleFollow', { user: following.getId() }) }}\" class=\"ml-3 inline font-bold text-sm px-4 py-1 text-white rounded bg-blue-500 hover:bg-blue-600\">{%trans%}Unfollow{%endtrans%}</a>
                </li>
                {% endfor %}
              </ul>
            </div>
            <div x-show=\"tab === 3\">
              <b>Polubione posty:</b>
              <ul>
              {% for lpost in app.user.getLikedPosts() %}
                <li>
                  <a class=\"hover:text-stone-500\" href=\"{{ path('posts.show', { id: lpost.id }) }}\">{{lpost.title}}</a>
                </li>
                {% endfor %}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{% endblock %}
", "dashboard/index.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\dashboard\\index.html.twig");
    }
}
