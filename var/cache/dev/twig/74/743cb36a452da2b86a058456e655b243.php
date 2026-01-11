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

/* dashboard/_delete_user_form.html.twig */
class __TwigTemplate_35553ffa0e3f9997b1a2beb442972c30 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_delete_user_form.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_delete_user_form.html.twig"));

        // line 1
        echo "<section class=\"space-y-6\">
  <h2 class=\"text-lg font-medium text-gray-900\">Delete Account</h2>

  ";
        // line 4
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["deleteAccountForm"]) || array_key_exists("deleteAccountForm", $context) ? $context["deleteAccountForm"] : (function () { throw new RuntimeError('Variable "deleteAccountForm" does not exist.', 4, $this->source); })()), 'form_start', ["attr" => ["class" => "p-6"]]);
        // line 5
        echo "
    <h2 class=\"text-lg font-medium text-gray-900\">Czy jesteś pewien/pewna, że chcesz usunąć konto?</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Gdy twoje konto zostanie usunięte, wszystkie zasoby oraz dane z nim związane zostaną trwale usunięte. Wpisz swoje hasło aby potwierdzić usunięcie konta.</p>

    <div class=\"mt-6\">
      ";
        // line 11
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["deleteAccountForm"]) || array_key_exists("deleteAccountForm", $context) ? $context["deleteAccountForm"] : (function () { throw new RuntimeError('Variable "deleteAccountForm" does not exist.', 11, $this->source); })()), "currentPassword", [], "any", false, false, false, 11), 'label', ["label_attr" => ["class" => "sr-only block font-medium text-sm text-gray-700"], "label" => "Hasło"]);
        // line 12
        echo "

      ";
        // line 14
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["deleteAccountForm"]) || array_key_exists("deleteAccountForm", $context) ? $context["deleteAccountForm"] : (function () { throw new RuntimeError('Variable "deleteAccountForm" does not exist.', 14, $this->source); })()), "currentPassword", [], "any", false, false, false, 14), 'widget', ["attr" => ["class" => "mt-1 block w-3/4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm", "placeholder" => "Hasło"]]);
        // line 15
        echo "

      ";
        // line 17
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["deleteAccountForm"]) || array_key_exists("deleteAccountForm", $context) ? $context["deleteAccountForm"] : (function () { throw new RuntimeError('Variable "deleteAccountForm" does not exist.', 17, $this->source); })()), "currentPassword", [], "any", false, false, false, 17), "vars", [], "any", false, false, false, 17), "errors", [], "array", false, false, false, 17)) > 0)) {
            // line 18
            echo "\t\t<ul class=\"mt-2 text-sm text-red-600 space-y-1\">
\t\t\t";
            // line 19
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["deleteAccountForm"]) || array_key_exists("deleteAccountForm", $context) ? $context["deleteAccountForm"] : (function () { throw new RuntimeError('Variable "deleteAccountForm" does not exist.', 19, $this->source); })()), "currentPassword", [], "any", false, false, false, 19), "vars", [], "any", false, false, false, 19), "errors", [], "array", false, false, false, 19));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 20
                echo "\t\t\t\t<li>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 20), "html", null, true);
                echo "</li>
\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 22
            echo "\t\t</ul>
\t";
        }
        // line 24
        echo "    </div>

    <div class=\"mt-6 flex justify-end\">
      <a type=\"button\" href=";
        // line 27
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("posts.index");
        echo " class=\"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150\">Anuluj</a>

      <button type=\"submit\" class=\"ml-3 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150\">Usuń konto</button>
    </div>
  ";
        // line 31
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["deleteAccountForm"]) || array_key_exists("deleteAccountForm", $context) ? $context["deleteAccountForm"] : (function () { throw new RuntimeError('Variable "deleteAccountForm" does not exist.', 31, $this->source); })()), 'form_end');
        echo "
</section>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "dashboard/_delete_user_form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 31,  97 => 27,  92 => 24,  88 => 22,  79 => 20,  75 => 19,  72 => 18,  70 => 17,  66 => 15,  64 => 14,  60 => 12,  58 => 11,  50 => 5,  48 => 4,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section class=\"space-y-6\">
  <h2 class=\"text-lg font-medium text-gray-900\">Delete Account</h2>

  {{ form_start(deleteAccountForm, {'attr': {'class': 'p-6' }}
\t) }}
    <h2 class=\"text-lg font-medium text-gray-900\">Czy jesteś pewien/pewna, że chcesz usunąć konto?</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Gdy twoje konto zostanie usunięte, wszystkie zasoby oraz dane z nim związane zostaną trwale usunięte. Wpisz swoje hasło aby potwierdzić usunięcie konta.</p>

    <div class=\"mt-6\">
      {{ form_label(deleteAccountForm.currentPassword, 'Hasło', {'label_attr': {'class': 'sr-only block font-medium text-sm text-gray-700' }}
\t) }}

      {{ form_widget(deleteAccountForm.currentPassword, {'attr': {'class': 'mt-1 block w-3/4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm', 'placeholder':'Hasło' }}
\t) }}

      {% if deleteAccountForm.currentPassword.vars['errors']|length > 0 %}
\t\t<ul class=\"mt-2 text-sm text-red-600 space-y-1\">
\t\t\t{% for error in deleteAccountForm.currentPassword.vars['errors'] %}
\t\t\t\t<li>{{ error.message }}</li>
\t\t\t{% endfor %}
\t\t</ul>
\t{% endif %}
    </div>

    <div class=\"mt-6 flex justify-end\">
      <a type=\"button\" href={{path('posts.index')}} class=\"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150\">Anuluj</a>

      <button type=\"submit\" class=\"ml-3 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150\">Usuń konto</button>
    </div>
  {{ form_end(deleteAccountForm) }}
</section>", "dashboard/_delete_user_form.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\dashboard\\_delete_user_form.html.twig");
    }
}
